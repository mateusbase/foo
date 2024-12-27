import ServiceCard from "@/components/ServiceCard";
import { ReactNode } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { nextRef, prevRef, swiperRef, currentIndex, onBeforeInit } =
    useSwiperNavigation();

  const isMedicPage = router.pathname.startsWith("/medicos");
  const showPagination = isMedicPage;

  const sliderProps = {
    size: 1,
    color: "text-primary-foreground",
    ...(showPagination && { currentIndex }),
    ...(showPagination && { showSwiperPagination: true }),
  };

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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard key={service.id} {...service} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex w-full justify-center space-x-4 md:hidden">
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          {...sliderProps}
        />
      </div>
    </div>
  );
}
