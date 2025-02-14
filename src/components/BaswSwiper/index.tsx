import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";
import { BaseSwiperProps } from "./type";

const BaseSwiper = <T extends { id: number }>({
  data,
  renderItem,
  slidesPerView = 1,
  spaceBetween = 30,
  breakpoints,
  className = "",
}: BaseSwiperProps<T>): JSX.Element => {
  const { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  return (
    <div className={className}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop
        breakpoints={breakpoints}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={onBeforeInit}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="w-full">
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderArrows
        swiperRef={swiperRef}
        prevRef={prevRef}
        nextRef={nextRef}
        showSwiperPagination
        currentIndex={currentIndex}
        className="my-7 lg:my-1"
      />
    </div>
  );
};

export default BaseSwiper;
