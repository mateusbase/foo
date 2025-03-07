import SliderArrows from "@/components/SliderArrows";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import OCAboutLivingCardRounded from "../OcAboutLivingCardRounded";

export default function OCAboutLivingCard(): JSX.Element {
  const { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  return (
    <div className="mt-5 w-full lg:space-x-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          1025: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
        }}
        loop
        onBeforeInit={onBeforeInit}
        className="mt-10 w-full"
      >
        <SwiperSlide className="flex h-full">
          <OCAboutLivingCardRounded
            description="Administração de eventos tardios ou de longo prazo enfrentados pelos pacientes. Foco na promoção do bem-estar, com orientações para hábitos mais saudáveis."
            isBackgroundUrl
            backgroundImageUrl="https://i.postimg.cc/BQk8bsZL/aboutlivingcard1.png"
          />
        </SwiperSlide>
        <SwiperSlide className="flex h-full">
          <OCAboutLivingCardRounded
            description="Estímulo para a participação nos exames de acompanhamento e detecção precoce de novos tumores originais."
            isBackgroundUrl
            backgroundImageUrl="https://i.postimg.cc/VLdrz5wP/aboutlivingcard2.png"
          />
        </SwiperSlide>
        <SwiperSlide className="flex h-full">
          <OCAboutLivingCardRounded
            description="Além de grupos de apoios liderados pela equipe de especialistas. Nesses encontros, são discutidos temas sobre como manter a saúde e lidar com os possíveis efeitos colaterais tardios do tratamento contra o câncer"
            isBackgroundUrl
            backgroundImageUrl="https://i.postimg.cc/7PBJv0pN/aboutlivingcard3.png"
          />
        </SwiperSlide>
      </Swiper>

      <div className="mb-10 mt-6 lg:hidden">
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
