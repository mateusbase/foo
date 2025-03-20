import BaseButton from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import ClippingCard from "@/components/ClippingCard";
import BaseInput from "@/components/Input";
import SortingFilterDropdown from "@/components/SortingFilterDropdown";
import { sortingFilterOptions } from "@/utils/sortingOptions";
import { useSortingFilter } from "@/hooks/useSortingFilter";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderArrows from "@/components/SliderArrows";
import { Navigation } from "swiper/modules";
import clippingCardData, {
  ClippingCardInfo,
} from "../ClippingScreen/cardInformations";

export default function ReleasesScreen(): JSX.Element {
  const { handleChange } = useSortingFilter(sortingFilterOptions[0].value);
  const { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  return (
    <PageLayout title="Releases">
      <div className="mt-10 flex flex-col gap-4 border-b border-gray-300 pb-4 md:mt-20 md:flex-row md:items-center md:justify-between md:px-0 lg:mt-0">
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
          {clippingCardData
            .reduce((acc, clipping, index) => {
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
                      isRelease
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className="mt-6 flex justify-center">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            currentIndex={currentIndex}
            showSwiperPagination
          />
        </div>
      </div>
    </PageLayout>
  );
}
