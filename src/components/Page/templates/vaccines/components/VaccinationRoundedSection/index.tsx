import SliderArrows from "@/components/BaseSwiper/components/SliderArrows";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import VaccinationRoundedCard from "../VaccinationRoundedCard";

type VaccinationBanner = {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    key: string;
  };
};

interface VaccinationRoundedSectionProps {
  left: VaccinationBanner;
  right: VaccinationBanner;
}

export default function VaccinationRoundedSection({
  left,
  right,
}: VaccinationRoundedSectionProps): JSX.Element {
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
            title={left.title}
            description={left.description}
            imageUrl={left.image.url}
          />
        </SwiperSlide>

        <SwiperSlide className="flex h-full">
          <VaccinationRoundedCard
            title={right.title}
            description={right.description}
            imageUrl={right.image.url}
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
