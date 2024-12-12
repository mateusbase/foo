import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

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
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

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
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
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

        <div className="mt-4 flex justify-center space-x-4">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            size={1}
            color="text-primary-foreground"
          />
        </div>
      </div>
    </div>
  );
}
