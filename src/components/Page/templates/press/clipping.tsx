import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/Button";
import BaseInput from "@/components/Input";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/BaseSwiper/components/SliderArrows";
import { useState } from "react";
import { ClippingCardInfo, ClippingRootProps } from "./types";
import ClippingCard from "./components/ClippingCard";

export function ClippingRoot({
  data,
  breadcrumbs,
}: ClippingRootProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);
  const { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  const getFilteredArticles = (): ClippingCardInfo[] => {
    return (
      data.articles
        ?.filter((article) =>
          article.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .map((article) => ({
          id: article.name,
          title: article.name,
          date: article.date,
          description: article.description,
          path: article.path,
        })) || []
    );
  };

  const handleSearch = (e?: React.KeyboardEvent | React.MouseEvent): void => {
    if (
      e &&
      e.type === "keypress" &&
      (e as React.KeyboardEvent).key !== "Enter"
    )
      return;
    setSearchTerm(inputValue);
    swiperRef.current?.slideTo(0);
    swiperRef.current?.update();
  };

  const filteredArticles = getFilteredArticles();

  return (
    <PageLayout
      title={data.header?.title}
      subtitle={data.header?.description}
      breadcrumbs={breadcrumbs}
    >
      <div className="mt-10 flex flex-col gap-4 border-b border-gray-300 pb-4 md:mt-20 md:flex-row md:items-center md:justify-between md:px-0 lg:mt-0">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <BaseInput
            placeholder="Pesquise pelo título"
            className="w-full sm:w-[280px]"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button
            color="primary"
            className="w-full text-white sm:w-auto lg:min-w-36"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </div>

        <div className="hidden cursor-pointer items-center justify-end gap-2 sm:justify-start lg:flex">
          <SortingFilterDropdown
            options={sortingFilterOptions}
            defaultSelectedKey={sortingFilterOptions[0].value}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="my-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            onBeforeInit(swiper);
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {filteredArticles
            ?.reduce((acc, clipping, index) => {
              const chunkIndex = Math.floor(index / 9);
              if (!acc[chunkIndex]) acc[chunkIndex] = [];
              acc[chunkIndex].push(clipping);
              return acc;
            }, [] as ClippingCardInfo[][])
            .map((group) => (
              <SwiperSlide key={group[0].id}>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {group.map((clipping) => (
                    <ClippingCard
                      key={clipping.id}
                      title={clipping.title}
                      date={clipping.date}
                      description={clipping.description}
                      path={clipping.path}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="mt-6 flex justify-center lg:mt-10">
          <SliderArrows
            showSwiperPagination
            currentIndex={currentIndex}
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
          />
        </div>
      </div>
    </PageLayout>
  );
}
