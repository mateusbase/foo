import ServiceCard from "@/components/ServiceCard";
import { ReactNode } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";

interface Service {
  id: number;
  title: string;
  icon: ReactNode;
  path: string;
}

interface ListServiceCardsMobileProps {
  services: Service[];
}

export default function ListServiceCardsMobile({
  services,
}: ListServiceCardsMobileProps): JSX.Element {
  const { nextRef, prevRef, swiperRef, currentIndex, onBeforeInit } =
    useSwiperNavigation();

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => onBeforeInit(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard key={service.id} {...service} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex w-full justify-center md:hidden">
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          showSwiperPagination
          nextRef={nextRef}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
}
