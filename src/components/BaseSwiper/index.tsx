import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/BaseSwiper/components/SliderArrows";
import { BaseSwiperProps } from "./type";

function getMaxSlidesPerView(
  breakpoints?: Record<number, { slidesPerView: number }>,
  defaultSlidesPerView = 1,
): number {
  if (!breakpoints) return defaultSlidesPerView;
  return Object.values(breakpoints)
    .map((bp) => bp.slidesPerView)
    .reduce((max, curr) => Math.max(max, curr), defaultSlidesPerView);
}

const BaseSwiper = <T extends { id?: number | string }>({
  data,
  renderItem,
  slidesPerView = 1,
  spaceBetween = 30,
  breakpoints,
  className = "",
  hasArrows = true,
  shouldLoop,
}: BaseSwiperProps<T>): JSX.Element => {
  const { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  const maxSlidesPerView = getMaxSlidesPerView(breakpoints, slidesPerView);
  const loop =
    typeof shouldLoop === "boolean"
      ? shouldLoop
      : (data?.length ?? 0) > maxSlidesPerView;

  return (
    <div className={`${className} w-full`}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        breakpoints={breakpoints}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={onBeforeInit}
        className="w-full"
      >
        {data?.map((item, index) => (
          <SwiperSlide
            key={item.id ?? `slide-${index}`}
            className="flex size-full"
          >
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      {hasArrows && (
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          showSwiperPagination
          currentIndex={currentIndex}
          className="my-7 lg:my-8"
        />
      )}
    </div>
  );
};

export default BaseSwiper;
