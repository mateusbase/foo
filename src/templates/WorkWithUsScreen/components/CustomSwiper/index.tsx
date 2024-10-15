import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { useEffect } from "react";
import { NavigationButtons } from "../NavigationButtons";

interface CustomSwiperProps {
  slides: any[];
  renderSlide: (slide: any) => JSX.Element;
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
}

export default function CustomSwiper({
  slides,
  renderSlide,
  prevRef,
  nextRef,
}: CustomSwiperProps): JSX.Element {
  // useEffect(() => {
  //   // UseEffect para garantir que os refs estejam prontos antes da inicialização do Swiper
  //   if (prevRef.current && nextRef.current) {
  //     // Lógica extra se necessário
  //   }
  // }, [prevRef, nextRef]);

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
      <NavigationButtons nextRef={nextRef} prevRef={prevRef} />
    </div>
  );
}
