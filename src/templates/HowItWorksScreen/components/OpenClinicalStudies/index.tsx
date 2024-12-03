import BaseButton from "@/components/Button";
import BaseSelect from "@/components/Select";
import Link from "next/link";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { clinicalResearchs } from "../../helper";
import ClinicalStudiesCard from "./components/ClinicalStudiesCard";

export default function OpenClinicalStudies(): JSX.Element {
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  return (
    <div className="w-full">
      <div className="flex flex-row border-b border-gray-300 pb-4">
        <div className="mt-3 flex w-full flex-col items-center gap-4 sm:flex-row md:mt-0">
          <BaseSelect
            color="primary"
            label=""
            variant="bordered"
            radius="full"
            size="lg"
            labelColor="primary"
            className="lg:max-w-[280px]"
            defaultSelectedKey="1"
            options={[
              { key: 1, value: "1", label: "Tipo de câncer" },
              { key: 2, value: "2", label: "Tipo de pesquisa" },
            ]}
          />
          <BaseSelect
            color="primary"
            label=""
            variant="bordered"
            radius="full"
            size="lg"
            labelColor="primary"
            defaultSelectedKey="1"
            className="lg:max-w-[280px]"
            options={[
              { key: 1, value: "1", label: "Unidade" },
              { key: 2, value: "2", label: "Clínica" },
            ]}
          />
          <BaseButton className="w-full text-white md:max-w-[141px]">
            Buscar
          </BaseButton>
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
        <h2 className="text-2xl text-primary md:text-3xl 2xl:text-[40px]">
          Estudos clínicos abertos
        </h2>
        {clinicalResearchs.map((research) => (
          <Link href="#/">
            <ClinicalStudiesCard
              key={research.id}
              title={research.title}
              unity={research.unity}
              description={research.description}
            />
          </Link>
        ))}
        <div className="mb-10 flex w-full justify-center lg:justify-start">
          <BaseButton
            variant="bordered"
            radius="sm"
            className="w-full border-1 md:w-[322px] lg:w-[228px]"
          >
            [+] Ver mais
          </BaseButton>
        </div>
      </div>
    </div>
  );
}
