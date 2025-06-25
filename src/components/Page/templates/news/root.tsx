import BaseContainer from "@/components/Container";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { useState } from "react";
import BaseSelect from "@/components/Select";
import { CardsGrid } from "./components/CardsGrid";
import { NewsRootProps } from "./types";
import FilterItem from "./components/FIlterItem";
import GenericNewsCard from "../ocJournal/components/GenericNewsCard";

export function NewsRoot({ data }: NewsRootProps): JSX.Element {
  const { displayArticles, articles, categories } = data;

  const [selectedFilter, setSelectedFilter] = useState<string>(
    categories[0].id ?? "",
  );

  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);

  const isShowingAll = selectedFilter === categories[0].id;

  const enrichedArticles = articles.map((article) => {
    const matchedCategory = categories.find(
      (cat) => cat.name === article.category.name,
    );

    return {
      ...article,
      category: {
        ...article.category,
        id: matchedCategory?.id,
      },
    };
  });

  const filteredArticles = isShowingAll
    ? enrichedArticles
    : enrichedArticles.filter(
        (article) => article.category.id === selectedFilter,
      );

  return (
    <main>
      <BaseContainer className="flex flex-col gap-5">
        <CardsGrid
          displayArticles={displayArticles}
          categories={categories}
          selectedFilter={selectedFilter}
          onSelectCategory={setSelectedFilter}
        />

        <div className="hidden lg:flex lg:flex-col">
          <div className="border-b-1 flex size-full justify-between border-darkGray pb-4 font-bold">
            <div className="flex justify-around gap-10">
              {categories?.map((filter) => (
                <FilterItem
                  key={filter.id}
                  {...filter}
                  id={filter.id || ""}
                  active={selectedFilter === filter.id}
                  onClick={() => setSelectedFilter(filter.id || "")}
                />
              ))}
            </div>

            <SortingFilterDropdown
              options={sortingFilterOptions}
              defaultSelectedKey={sortingFilterOptions[0].value}
              onChange={handleChange}
              className="flex cursor-pointer items-center justify-center text-darkGray"
            />
          </div>
        </div>

        <BaseSelect
          value={selectedFilter}
          options={categories.map((category) => ({
            label: category.name,
            value: category.id || "",
          }))}
          className="border-primary text-primary lg:hidden"
          onChange={(key) => setSelectedFilter(String(key))}
        />

        {filteredArticles.map((article) => {
          const category = categories?.find(
            (cat) => cat.name === article.category.name,
          );

          return (
            <GenericNewsCard
              key={article.id}
              options={{
                title: article.title,
                description: article.shortDescription,
                date: article.date,
                path: article.path,
                author: article.author,
                image: article.coverImage,
              }}
              variant="news"
              showCategoryButton
              showFooter={false}
              categoryLabel={category?.name || "Artigos"}
            />
          );
        })}
      </BaseContainer>
    </main>
  );
}
