import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import SliderArrows from "@/components/BaseSwiper/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { UnitActionsProps } from "@/components/Page/templates/healthProviders/types";
import CardGrid from "../CardGrid";

const CardSwiper = (unitActions: UnitActionsProps): JSX.Element => {
  const [visibleCards, setVisibleCards] = useState(3);
  const { currentIndex, nextRef, onBeforeInit, prevRef, swiperRef } =
    useSwiperNavigation();

  const { units } = unitActions;

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 640) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1025) {
        setVisibleCards(4);
      } else {
        setVisibleCards(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mb-14">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        onBeforeInit={(swiper) => onBeforeInit(swiper)}
        loop
        style={{ width: "100%", height: "100%" }}
      >
        {Array.from({ length: Math.ceil(10 / visibleCards) }).map(() => (
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardGrid
              visibleCards={visibleCards}
              unitActions={unitActions}
              units={units}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderArrows
        nextRef={nextRef}
        swiperRef={swiperRef}
        prevRef={prevRef}
        showSwiperPagination
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default CardSwiper;
