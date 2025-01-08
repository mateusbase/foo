import SliderArrows from "@/components/SliderArrows";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import listItems from "../../listItems";
import VaccinationRoundedCard from "../VaccinationRoundedCard";

export default function VaccinationRoundedSection(): JSX.Element {
  const { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  return (
    <div className="mt-5 w-full lg:space-x-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        loop
        onBeforeInit={onBeforeInit}
        className="mt-10 w-full"
      >
        <SwiperSlide className="flex h-full">
          <VaccinationRoundedCard
            title="Padrão de excelência Oncoclínicas"
            description="A oferta de serviço de vacinação da Oncoclínicas segue o Calendário do PNI - Programa Nacional de imunizações -, e as diretrizes da SBIm - Sociedade Brasileira de Imunizações - e da SBOC - Sociedade Brasileira de Oncologia Clínica."
          />
        </SwiperSlide>
        <SwiperSlide className="flex h-full">
          <VaccinationRoundedCard
            title="Por que é importante se vacinar?"
            listItems={listItems}
          />
        </SwiperSlide>
      </Swiper>

      <div className="mb-10 mt-6 md:hidden">
        <SliderArrows
          swiperRef={swiperRef}
          showSwiperPagination
          currentIndex={currentIndex}
          prevRef={prevRef}
          nextRef={nextRef}
        />
      </div>
    </div>
  );
}
