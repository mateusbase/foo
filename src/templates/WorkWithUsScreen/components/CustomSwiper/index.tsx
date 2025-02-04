import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";
import { CustomSwiperProps } from "./types";

export default function CustomSwiper({
  slides,
  renderSlide,
}: CustomSwiperProps): JSX.Element {
  const { nextRef, prevRef, swiperRef, currentIndex } = useSwiperNavigation();
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        onInit={(swiper) => {
          if (swiper.params.navigation) {
            const navigationParams = swiper.params
              .navigation as NavigationOptions;
            navigationParams.prevEl = prevRef.current;
            navigationParams.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>{renderSlide(slide)}</SwiperSlide>
        ))}
      </Swiper>

      <div className="my-6">
        <SliderArrows
          color="text-primary-foreground"
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          currentIndex={currentIndex}
          showSwiperPagination
        />
      </div>
    </div>
  );
}
