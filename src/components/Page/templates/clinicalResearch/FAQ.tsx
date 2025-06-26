import PageLayout from "@/components/PageLayout";
import MenuHeadingLink from "@/components/RenderBlocks/components/MenuHeadingLink";
import BaseSelect from "@/components/Select";
import { Accordion } from "@/components/Accordion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useRouter } from "next/router";
import { ClinicResearchFAQRootProps } from "./type";

export default function ClinicalResearchFAQTemplateRoot({
  data,
  breadcrumbs,
}: ClinicResearchFAQRootProps): JSX.Element {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <PageLayout
      title={data.header?.title}
      subtitle={data.header?.description}
      breadcrumbs={breadcrumbs}
    >
      <div className="flex w-full flex-col gap-10 lg:flex-row">
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

        <main className="flex-1 px-4">
          <div className="w-full">
            <Accordion
              titleClassName="text-primary text-left text-xl md:text-2xl"
              content={data.questions.map((item, index) => ({
                id: index.toString(),
                title: item.question,
                content: (
                  <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                    className="prose prose-sm"
                  />
                ),
              }))}
            />
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
