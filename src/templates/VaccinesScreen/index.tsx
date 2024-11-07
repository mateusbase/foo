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

type SwiperParams = {
  params: {
    navigation: {
      prevEl: HTMLButtonElement | null;
      nextEl: HTMLButtonElement | null;
    };
  };
};

export default function VaccinesScreen(): JSX.Element {
  const prevRefCard = useRef<HTMLButtonElement>(null);
  const nextRefCard = useRef<HTMLButtonElement>(null);
  const swiperRefCard = useRef<SwiperType>(null);

  const prevRefRounded = useRef<HTMLButtonElement>(null);
  const nextRefRounded = useRef<HTMLButtonElement>(null);
  const swiperRefRounded = useRef<SwiperType>(null);

  const onBeforeInit = useCallback(
    (
      swiper: SwiperType,
      swiperRef: React.RefObject<SwiperType>,
      prevRef: React.RefObject<HTMLButtonElement>,
      nextRef: React.RefObject<HTMLButtonElement>,
    ) => {
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation !== "boolean"
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }
    },
    [],
  );

  return (
    <PageLayout title="OC Vacinas" subtitle="Todo o cuidado que a vida merece">
      <div className="relative mb-10 mt-20 w-full lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) =>
            onBeforeInit(swiper, swiperRefCard, prevRefCard, nextRefCard)
          }
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

      <div className="mt-10 w-full overflow-hidden lg:space-x-6">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          loop
          onBeforeInit={(swiper) =>
            onBeforeInit(
              swiper,
              swiperRefRounded,
              prevRefRounded,
              nextRefRounded,
            )
          }
          className="mt-10 w-full"
        >
          <SwiperSlide className="flex h-full min-h-full">
            <VaccinationRoundedCard
              title="Padrão de excelência Oncoclínicas"
              description="A oferta de serviço de vacinação da Oncoclínicas segue o Calendário do PNI - Programa Nacional de imunizações -, e as diretrizes da SBIm - Sociedade Brasileira de Imunizações - e da SBOC - Sociedade Brasileira de Oncologia Clínica."
            />
          </SwiperSlide>
          <SwiperSlide className="flex h-full min-h-full">
            <VaccinationRoundedCard
              title="Por que é importante se vacinar?"
              listItems={listItems}
            />
          </SwiperSlide>
        </Swiper>

        <div className="mb-10 md:hidden">
          <SliderArrows
            swiperRef={swiperRefRounded}
            prevRef={prevRefRounded}
            nextRef={nextRefRounded}
          />
        </div>
      </div>
    </PageLayout>
  );
}
