import PageLayout from "@/components/PageLayout";
import MenuHeadingLink from "@/components/RenderBlocks/components/MenuHeadingLink";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";
import { useState } from "react";
import { CommitteesRootProps } from "./type";
import InvitedMedicalCard from "../events/components/InvitedMedicCard";

export function CommitteesRoot({
  data,
  breadcrumbs,
}: CommitteesRootProps): JSX.Element {
  const { teams } = data;
  const router = useRouter();

  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      title={data.header.title}
      subtitle={data.header.description}
    >
      <div className="flex w-full flex-col gap-10 md:flex-row">
        <div className="hidden w-[398px] overflow-hidden rounded-xl text-white lg:block">
          <div className="flex w-full flex-col">
            {data.displayConfig.sideLinks.map((item, index) => (
              <MenuHeadingLink
                key={item.name}
                name={item.name}
                link={item.link}
                isFirst={index === 0}
                isLast={index === data.displayConfig.sideLinks.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col gap-4 lg:hidden">
          <BaseSelect
            size="lg"
            value={selectedValue}
            className="h-[54px] w-full border-primary text-primary"
            options={data.displayConfig.sideLinks.map((item) => ({
              value: item.link.external ? item.link.url! : `/${item.link.path}`,
              label: item.name,
            }))}
            startContent={
              <RxHamburgerMenu size={20} className="text-primary" />
            }
            onChange={(newValue: string | number) => {
              const value = newValue.toString();

              setSelectedValue(value);

              if (value.startsWith("http")) {
                window.location.href = value;
              } else {
                router.push(value);
              }
            }}
          />
        </div>

        <main className="md:px- flex-1 px-4">
          {teams?.map((team) => (
            <div key={team.name} className="mb-10">
              <h2 className="mb-6 text-2xl text-primary md:text-3xl lg:text-title-lg">
                {team.name}
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                {team.physicians?.map((physician) => (
                  <InvitedMedicalCard
                    key={`${physician.name}-${physician.crm}`}
                    crm={physician.crm}
                    name={physician.name}
                    avatar={physician.image}
                    positions={physician.attributions}
                  />
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </PageLayout>
  );
}
