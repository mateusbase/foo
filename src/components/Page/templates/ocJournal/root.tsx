import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/Button";
import BaseSelect from "@/components/Select";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import GradientBanner from "@/components/Blocks/GradientBanner";
import { useState } from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { OcJournalRootProps } from "./types";
import GenericNewsCard from "./components/GenericNewsCard";

export function OCJournalRoot({
  data,
  breadcrumbs,
}: OcJournalRootProps): JSX.Element {
  const { articles } = data;
  const { title, description, image, link } = data.banner;
  const deviceType = useDeviceType();
  const visibleCards = deviceType === "desktop" ? 3 : 4;

  const [visibleCount, setVisibleCount] = useState(visibleCards);

  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  const handleLoadMore = (): void => {
    setVisibleCount((prev) => prev + visibleCards);
  };

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-10 md:mt-0">
          <GradientBanner
            title={title}
            description={description}
            media={{
              data: {
                type: "image",
                data: image,
              },
              side: "right",
            }}
            link={{
              variant: "button",
              text: "Download",
              target: link,
            }}
          />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-b border-gray-300 pb-4 md:flex-row md:items-center md:justify-between lg:mt-28">
          <div className="flex w-full flex-col items-center gap-4 md:flex-row">
            <div className="w-full md:w-[280px]">
              <BaseSelect
                placeholder="Especialidade"
                className="border-primary text-primary"
                options={[
                  { value: "Oncologia", label: "Oncologia" },
                  { value: "Cardiologia", label: "Cardiologia" },
                  { value: "Especialidade", label: "Especialidade" },
                ]}
                onChange={(e) => setSelectedCategory(e)}
              />
            </div>

            <Button
              className="w-full min-w-44 sm:w-auto"
              onClick={() => {
                if (!selectedCategory) {
                  setFilteredArticles(articles);
                  return;
                }

                setFilteredArticles(
                  articles?.filter(
                    (article) =>
                      article.category?.name?.toLowerCase() ===
                      selectedCategory.toLowerCase(),
                  ),
                );
              }}
            >
              Buscar
            </Button>
          </div>

          <div className="flex cursor-pointer items-center justify-center gap-2 md:mr-7 md:justify-end">
            <SortingFilterDropdown
              options={sortingFilterOptions}
              defaultSelectedKey={sortingFilterOptions[0].value}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-4 grid w-full gap-6 md:mb-10 md:grid-cols-2 lg:grid-cols-1 lg:gap-8">
          {filteredArticles?.slice(0, visibleCount).map((article) => (
            <GenericNewsCard
              key={article.title}
              options={{
                title: article.title,
                date: article.date,
                content: article.content,
                image: article.coverImage,
                id: article.id,
                path: article.path,
              }}
              showFooter
              variant="oc-journal"
            />
          ))}
        </div>

        {filteredArticles.length > visibleCards && (
          <div className="my-10 flex justify-center lg:mb-0 lg:justify-start">
            <Button
              variant="outlined"
              className="h-[50px] w-56 justify-center rounded-sm border text-lg sm:w-3/6 md:w-80 lg:w-[228px]"
              onClick={handleLoadMore}
            >
              [+] Ver mais
            </Button>
          </div>
        )}
      </PageLayout>
    </main>
  );
}
