import PageLayout from "@/components/PageLayout";
import BaseInput from "@/components/Input";
import { SearchIcon } from "@/components/Icons";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";
import CancerCard from "./components/CancerCard";
import { cancerTypesMock } from "./components/CancerCard/cancerTypesMock";
import MenuSelector from "./components/MenuSelector";
import { bodyRegionsMock } from "./helper";
import { cancerTypesPerRegionMock } from "./cancerTypesMock";

export default function TypesOfCancerScreen(): JSX.Element {
  const { nextRef, prevRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();
  const [activeRegion, setActiveRegion] = useState<number>(1);

  const filteredCancers =
    activeRegion === 1
      ? cancerTypesPerRegionMock
      : cancerTypesPerRegionMock.filter(
          (cancer) => cancer.regionId === activeRegion,
        );

  return (
    <PageLayout
      title="Tipos de Câncer"
      subtitle="Conheça os tipos de câncer mais incidentes no Brasil, como são feitos seus diagnósticos, tratamentos e prevenção."
    >
      <div className="mt-10 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-[40px]">
          Existem diversos tipos de câncer e, a doença pode se desenvolver em
          qualquer órgão do corpo.
        </h1>

        <p className="text-xl text-darkGray md:text-2xl">
          O câncer acomete milhões de pessoas em todos os continentes e tem um
          impacto profundo na sociedade, uma vez que envolve familiares e toda
          uma rede de apoio durante o tratamento e a recuperação da doença.
        </p>
        <p className="text-xl text-darkGray md:text-2xl">
          Em 2020, 19,3 milhões de novos casos foram diagnosticados no mundo -
          destes, 592,2 mil foram no Brasil. Globalmente, os tumores de pele não
          melanoma são os mais frequentes, seguido do câncer de mama em mulheres
          e de próstata em homens que registram o maior número de ocorrências.
          Em termos de letalidade, o câncer de pulmão é o primeiro no ranking em
          todos os cenários.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-light text-primary lg:text-6xl">
          Confira os tipos de câncer mais comuns no Brasil
        </h1>
        <div className="mt-10 hidden grid-cols-3 gap-7 lg:grid">
          {cancerTypesMock.map((cancer) => (
            <CancerCard
              key={cancer.id}
              id={cancer.id}
              name={cancer.name}
              description={cancer.description}
              icon={cancer.icon}
            />
          ))}
        </div>

        <div className="relative mt-10 block w-full lg:hidden">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            loop
            onBeforeInit={(swiper) => onBeforeInit(swiper)}
          >
            {cancerTypesMock.map((cancer) => (
              <SwiperSlide key={cancer.id}>
                <CancerCard
                  id={cancer.id}
                  name={cancer.name}
                  description={cancer.description}
                  icon={cancer.icon}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 flex w-full justify-center space-x-4 lg:hidden">
            <SliderArrows
              swiperRef={swiperRef}
              prevRef={prevRef}
              nextRef={nextRef}
              currentIndex={currentIndex}
              size={1}
              showSwiperPagination
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-light text-primary lg:text-6xl">
          Todos os tipos de Câncer
        </h1>

        <div className="lg:w-4/6">
          <p className="mt-10 text-center text-2xl text-darkGray">
            O câncer se desenvolve em praticamente qualquer parte do corpo e
            varia em tipos e gravidade. Selecione abaixo a parte do corpo que
            deseja pesquisar ou busque pelo órgão / nome do câncer.
          </p>
        </div>

        <BaseInput
          placeholder="Busque pelo termo"
          color="primary"
          endContent={<SearchIcon />}
          className="mt-10 lg:w-[416px]"
        />

        <div className="mt-10 w-full">
          <MenuSelector
            options={bodyRegionsMock}
            onClick={(id) => setActiveRegion(id)}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-64 gap-y-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCancers.map((cancer) => (
            <p key={cancer.id} className="text-xl text-darkGray">
              {cancer.name}
            </p>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
