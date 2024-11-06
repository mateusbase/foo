import PageLayout from "@/components/PageLayout";
import { useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { vaccineInformation } from "./vaccineInformation";
import VaccinesCard from "./components/VaccinesCardComponent";
import { Swiper as SwiperType } from "swiper/types";
import SliderArrows from "../../components/SliderArrows";

type SwiperParams = {
  params: {
    navigation: {
      prevEl: HTMLButtonElement | null;
      nextEl: HTMLButtonElement | null;
    };
  };
};

export default function VaccinesScreen(): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const onBeforeInit = useCallback((swiper: SwiperParams) => {
    swiperRef.current = swiper;

    if (typeof swiper.params.navigation !== "boolean") {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
  }, []);

  return (
    <PageLayout>
      <div className="relative mb-10 mt-20 w-full lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={onBeforeInit}
        >
          {vaccineInformation.map((vaccine) => (
            <SwiperSlide key={vaccine.id}>
              <VaccinesCard
                title={vaccine.title}
                description={vaccine.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
        />
      </div>
    </PageLayout>
  );
}
