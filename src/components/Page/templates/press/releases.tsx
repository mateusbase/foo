import PageLayout from "@/components/PageLayout";
import BaseInput from "@/components/Input";
import { Button } from "@/components/Button";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { ReleasesRootProps } from "./types";
import ClippingCard from "./components/ClippingCard";

export function ReleasesRoot({
  data,
  breadcrumbs,
}: ReleasesRootProps): JSX.Element {
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-10 flex flex-col gap-4 border-b border-gray-300 pb-4 md:mt-20 md:flex-row md:items-center md:justify-between md:px-0 lg:mt-0">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <BaseInput
              placeholder="Pesquise pelo título"
              className="w-full text-primary placeholder:text-primary sm:w-[280px]"
            />

            <Button className="w-full sm:w-auto lg:min-w-36">Buscar</Button>
          </div>

          <div className="flex cursor-pointer items-center justify-end gap-2 sm:justify-start">
            <SortingFilterDropdown
              options={sortingFilterOptions}
              defaultSelectedKey={sortingFilterOptions[0].value}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="my-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.releases.map((clipping) => (
              <ClippingCard
                key={clipping.id}
                title={clipping.name}
                date={clipping.date}
                description={clipping.description}
                isRelease
                fileUrl={clipping.file.url}
              />
            ))}
          </div>
        </div>
      </PageLayout>
    </main>
  );
}
