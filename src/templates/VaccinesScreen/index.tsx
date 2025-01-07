import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PageLayout from "@/components/PageLayout";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { vaccineInformation } from "./vaccineInformation";
import VaccinesCard from "./components/VaccinesCardComponent";
import SliderArrows from "../../components/SliderArrows";
import VaccinationRoundedSection from "./components/VaccinationRoundedSection";
import VaccineLocations from "./components/VaccineLocations";

export default function VaccinesScreen(): JSX.Element {
  const {
    prevRef: prevRefCard,
    nextRef: nextRefCard,
    swiperRef: swiperRefCard,
    onBeforeInit: onBeforeInitCard,
    currentIndex,
  } = useSwiperNavigation();

  return (
    <PageLayout title="OC Vacinas" subtitle="Todo o cuidado que a vida merece">
      <div className="relative mb-5 mt-20 w-full md:my-5 lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => onBeforeInitCard(swiper)}
          onInit={(swiper) => {
            swiperRefCard.current = swiper;
          }}
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
          showSwiperPagination
          currentIndex={currentIndex}
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

      <VaccineLocations />
    </PageLayout>
  );
}
