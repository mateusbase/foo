import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/SliderArrows";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { services } from "../../mock";

export default function SliderMedicalService(): JSX.Element {
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

  return (
    <div>
      <div className="mx-auto mt-40 hidden w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <MedicalServiceCard
            key={service.subtitle}
            subtitle={service.subtitle}
            serviceTitle={service.serviceTitle}
            serviceDescription={service.serviceDescription}
          />
        ))}
      </div>

      <div className="relative mt-20 w-full sm:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop
          onInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.subtitle}>
              <MedicalServiceCard
                subtitle={service.subtitle}
                serviceTitle={service.serviceTitle}
                serviceDescription={service.serviceDescription}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex justify-center space-x-4">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            size={1}
            color="text-primary"
          />
        </div>
      </div>
    </div>
  );
}
