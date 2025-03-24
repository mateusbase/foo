import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import UnitsCardMobile from "../UnitsCard";

interface Units {
  id: number;
  unitName: string;
  address: string;
  complement: string;
  city: string;
  hours: string;
  specialties: string[];
}

interface ListServiceCardsMobileProps {
  units: Units[];
}
export default function ListNearbyUnitCardsMobile({
  units,
}: ListServiceCardsMobileProps): JSX.Element {
  const { nextRef, prevRef, swiperRef, currentIndex, onBeforeInit } =
    useSwiperNavigation();

  return (
    <div className="">
      <div className="relative w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={300}
          loop
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onBeforeInit={(swiper) => onBeforeInit(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {units.map((unit) => (
            <SwiperSlide key={unit.id}>
              <UnitsCardMobile key={unit.id} {...unit} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="my-4 flex justify-center space-x-4 md:my-7">
          <SliderArrows
            swiperRef={swiperRef}
            showSwiperPagination
            prevRef={prevRef}
            currentIndex={currentIndex}
            nextRef={nextRef}
            size={1}
            color="text-primary-foreground"
          />
        </div>
      </div>
    </div>
  );
}
