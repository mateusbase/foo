import BaseButton from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import ClippingCard from "@/components/ClippingCard";
import BaseInput from "@/components/Input";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";

export default function ReleasesScreen(): JSX.Element {
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  return (
    <PageLayout title="Releases">
      <div className="mt-10 flex flex-col gap-4 border-b border-gray-300 pb-4 md:mt-20 md:flex-row md:items-center md:justify-between md:px-0">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <BaseInput
            color="primary"
            variant="bordered"
            radius="full"
            placeholder="Pesquise pelo título"
            placeholderColor="primary"
            className="w-full sm:w-[280px]"
          />

          <BaseButton
            color="primary"
            className="w-full text-white sm:w-auto lg:min-w-36"
          >
            Buscar
          </BaseButton>
        </div>

        <div className="flex cursor-pointer items-center justify-end gap-2 sm:justify-start">
          <SortingFilterDropdown
            options={sortingFilterOptions}
            defaultSelectedKey={sortingFilterOptions[0].value}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
        <ClippingCard
          title="Oncoclínicas é destaque em premiação por prestação de serviços médicos"
          date="23 de Setembro de 2023"
          isRelease
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          isRelease
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          isRelease
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          isRelease
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          isRelease
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          isRelease
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          isRelease
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          isRelease
        />
        <ClippingCard
          title="Oncoclínicas lança nova campanha de conscientização"
          date="10 de Outubro de 2023"
          isRelease
        />
      </div>
    </PageLayout>
  );
}
