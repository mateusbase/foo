import HealthServiceCard from "@/components/HealthServiceCard";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import BaseButton from "@/components/Button";
import { cards } from "../../aboutCancerMocks";

const CommonCancers = (): JSX.Element => {
  const { swiperRef, prevRef, nextRef, currentIndex, onBeforeInit } =
    useSwiperNavigation();
  return (
    <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center md:mt-0 lg:hidden">
      <Swiper
        modules={[Navigation]}
        loop
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
        onInit={(swiper) => onBeforeInit(swiper)}
        className="w-full max-w-2xl"
      >
        {cards.map((service) => (
          <SwiperSlide key={service.id} className="flex justify-center">
            <HealthServiceCard
              serviceTitle="Análise Patológica"
              serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
              showButton
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mb-6 mt-10 flex w-full max-w-2xl flex-col items-center justify-between gap-5 px-4 md:flex-row-reverse md:gap-0">
        <div className="hidden md:block">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            showSwiperPagination
            currentIndex={currentIndex}
          />
        </div>

        <BaseButton
          color="primary"
          className="h-[56px] w-[320px] shrink-0 text-white"
        >
          Ver todos os tipos de câncer
        </BaseButton>
      </div>
    </div>
  );
};

export default CommonCancers;
