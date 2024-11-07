import { useRef, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { vaccineInformation } from "./vaccineInformation";
import VaccinesCard from "./components/VaccinesCardComponent";
import { Swiper as SwiperType } from "swiper/types";
import SliderArrows from "../../components/SliderArrows";
import VaccinationRoundedCard from "./components/VaccinationRoundedCard";
import listItems from "./listItems";
import PageLayout from "@/components/PageLayout";
import VaccinationRoundedSection from "./components/VaccinationRoundedSection";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";

export default function VaccinesScreen(): JSX.Element {
  const {
    prevRef: prevRefCard,
    nextRef: nextRefCard,
    swiperRef: swiperRefCard,
    onBeforeInit: onBeforeInitCard,
  } = useSwiperNavigation();

  return (
    <PageLayout title="OC Vacinas" subtitle="Todo o cuidado que a vida merece">
      <div className="relative mb-10 mt-20 w-full lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => onBeforeInitCard(swiper)}
        >
          {vaccineInformation.map((vaccine) => (
            <SwiperSlide key={vaccine.id}>
              <VaccinesCard
                title={vaccine.title}
                description={vaccine.description}
                iconUrl={vaccine.iconUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderArrows
          swiperRef={swiperRefCard}
          prevRef={prevRefCard}
          nextRef={nextRefCard}
        />
      </div>

      <div className="hidden w-full items-center lg:flex lg:flex-row lg:gap-10">
        {vaccineInformation.map((vaccine) => (
          <VaccinesCard
            key={vaccine.id}
            title={vaccine.title}
            description={vaccine.description}
            iconUrl={vaccine.iconUrl}
          />
        ))}
      </div>

      <VaccinationRoundedSection />

      <div className="justify-center lg:mt-14">
        <h1 className="font-lato-bold text-primary lg:text-title-xl">
          Consulte as vacinas oferecidas na sua cidade
        </h1>
      </div>
    </PageLayout>
  );
}
