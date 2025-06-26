import PageLayout from "@/components/PageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/BaseSwiper/components/SliderArrows";
import type { VaccinesRootProps } from "./type";
import VaccinesCard from "./components/VaccinesCardComponent";
import VaccinationRoundedSection from "./components/VaccinationRoundedSection";
import VaccineLocations from "./components/VaccineLocations";

export function VaccinesRoot({
  data,
  breadcrumbs,
}: VaccinesRootProps): JSX.Element {
  const {
    prevRef: prevRefCard,
    nextRef: nextRefCard,
    swiperRef: swiperRefCard,
    onBeforeInit: onBeforeInitCard,
    currentIndex,
  } = useSwiperNavigation();

  const vaccineInformation = data.cards.map((card, index) => ({
    id: index,
    title: card.title,
    description: card.description,
    iconUrl: card.image.url,
  }));

  return (
    <PageLayout
      title={data.header?.title}
      subtitle={data.header?.description}
      breadcrumbs={breadcrumbs}
    >
      <div className="relative mb-5 mt-10 w-full md:my-5 lg:hidden">
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
          className="mt-10 md:mt-12"
        />
      </div>

      <div className="hidden w-full items-stretch lg:grid lg:grid-cols-3 lg:gap-10">
        {vaccineInformation.map((vaccine) => (
          <VaccinesCard
            key={vaccine.id}
            title={vaccine.title}
            description={vaccine.description}
            iconUrl={vaccine.iconUrl}
          />
        ))}
      </div>

      <VaccinationRoundedSection
        left={data.banner.left}
        right={data.banner.right}
      />

      <VaccineLocations title={data.units.title} entries={data.units.entries} />
    </PageLayout>
  );
}
