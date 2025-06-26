import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/Button";
import BaseSelect from "@/components/Select";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import MenuHeadingLink from "@/components/RenderBlocks/components/MenuHeadingLink";
import { useState } from "react";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import { ClinicResearchStudiesRootProps } from "./type";
import ClinicalStudiesCard from "./components/ClinicalStudiesCard";

export function ClinicResearchStudiesRoot({
  data,
  breadcrumbs,
}: ClinicResearchStudiesRootProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const router = useRouter();
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  const { studies } = data;

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      title={data.header.title}
      subtitle={data.header.description}
    >
      <div className="flex w-full flex-col gap-10 lg:flex-row">
        <div className="hidden w-[398px] overflow-hidden rounded-xl text-white lg:block">
          <div className="flex w-full flex-col">
            {data.displayConfig?.sideLinks.map((item, index) => (
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

        <main className="flex-1">
          <div className="w-full">
            <div className="flex flex-row border-b border-gray-300 pb-4">
              <div className="mt-3 flex w-full flex-col items-center gap-4 sm:flex-row md:mt-0">
                <BaseSelect
                  size="lg"
                  placeholder="Tipo de câncer"
                  className="border border-primary text-primary lg:max-w-[280px]"
                  options={[
                    { value: "1", label: "Tipo de câncer" },
                    { value: "2", label: "Tipo de pesquisa" },
                  ]}
                />

                <BaseSelect
                  size="lg"
                  placeholder="Unidade"
                  className="border border-primary text-primary lg:max-w-[280px]"
                  options={[
                    { value: "1", label: "Unidade" },
                    { value: "2", label: "Clínica" },
                  ]}
                />

                <Button className="w-full text-white md:max-w-[141px]">
                  Buscar
                </Button>
              </div>

              <div className="hidden justify-end gap-2 sm:justify-start lg:flex">
                <SortingFilterDropdown
                  options={sortingFilterOptions}
                  defaultSelectedKey={sortingFilterOptions[0].value}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl text-primary md:text-3xl 2xl:text-title-lg">
                Estudos clínicos abertos
              </h1>

              {studies?.map((study) => (
                <ClinicalStudiesCard key={study.id} {...study} />
              ))}

              <div className="mb-10 flex w-full justify-center lg:justify-start">
                <Button
                  className="w-full md:w-[322px] lg:w-[228px]"
                  variant="outlined"
                >
                  [+] Ver mais
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
}
