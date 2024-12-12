import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HealthServiceCard from "@/components/HealthServiceCard";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import PageLayout from "@/components/PageLayout";
import { categories } from "@/components/IconCard/mocks";
import IconCard from "@/components/IconCard";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";
import CommonCancers from "./components/CommonCancers";
import { cards, services } from "./aboutCancerMocks";

export default function AllAboutCancerScreen(): JSX.Element {
  const { nextRef, prevRef, onBeforeInit, swiperRef } = useSwiperNavigation();
  const {
    nextRef: nextRefCard,
    prevRef: prevRefCard,
    swiperRef: swiperRefCard,
    onBeforeInit: onBeforeInitCard,
  } = useSwiperNavigation();

  return (
    <PageLayout title="Tudo sobre o câncer" subtitle="Oncoclínicas">
      <div className="mt-20 flex justify-start">
        <div className="text-left md:text-center">
          <h2 className="text-2xl text-primary md:text-title-xl md:leading-[74px]">
            O que é o câncer?
          </h2>

          <p className="mt-4 text-base text-darkGray md:text-[28px] md:font-medium md:leading-[32px]">
            Nesta série de informações confeccionadas pelo Grupo Oncoclínicas,
            você poderá entender mais sobre o que é o câncer, seus tipos,
            tratamentos disponíveis na clínica e alertas sobre prevenção e
            qualidade de vida.
          </p>

          <h2 className="mt-14 hidden text-2xl font-extralight text-primary md:block md:text-[28px] md:font-bold md:leading-[74px]">
            Leia o conteúdo abaixo
          </h2>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-3">
          <h2 className="text-2xl text-primary md:text-[40px] md:leading-[48px]">
            O câncer?
          </h2>
          <p className="mt-4 text-base text-darkGray md:text-[20px] md:leading-[30px]">
            Câncer é um crescimento anormal de células, que se dividem
            rapidamente formando tumores. A doença pode atingir a maior parte
            dos órgãos do corpo humano, incluindo a circulação sanguínea, e se
            espalhar para outras regiões, como tecidos. É o crescimento
            desordenado e anormal de células que, dividindo-se rapidamente,
            formam tumores em algum local do corpo e podem se espalhar para
            outras regiões, invadindo tecidos e órgãos. São mais de 200 tipos de
            câncer, que se dividem em 5 categorias:
          </p>
          <p className="mt-10 text-base font-bold text-darkGray md:mt-20 md:text-[20px] md:leading-[30px]">
            São mais de 200 tipos de câncer, que se dividem em 5 categorias:
          </p>
        </div>

        <div className="mt-10 hidden w-full grid-cols-1 gap-6 md:mt-0 lg:grid lg:w-2/5 lg:grid-cols-2">
          {categories.map((categorie) => (
            <IconCard
              cardTitle={categorie.title}
              cardDescription={categorie.description}
              showButton={false}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center md:w-1/2 lg:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            onInit={(swiper) => onBeforeInitCard(swiper)}
            className="w-full max-w-lg"
          >
            {cards.map((service) => (
              <SwiperSlide
                key={service.id}
                className="flex items-center justify-center"
              >
                <HealthServiceCard
                  serviceTitle="Análise Patológica"
                  serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-6 flex justify-center space-x-4">
            <SliderArrows
              swiperRef={swiperRefCard}
              prevRef={prevRefCard}
              nextRef={nextRefCard}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-start md:mt-32 md:justify-center">
        <div className="text-left md:text-center">
          <h2 className="font-lato-thin text-2xl text-primary md:text-5xl md:font-black md:leading-[74px]">
            Confira os tipos de câncer mais comuns no Brasil
          </h2>
          <p className="mt-4 text-base text-darkGray md:text-[28px] md:font-medium md:leading-[32px]">
            O câncer se desenvolve em praticamente qualquer parte do corpo e
            varia em tipos e gravidade. Selecione abaixo a parte do corpo que
            deseja pesquisar ou busque pelo órgão / nome do câncer. Conheça os
            mais comuns:
          </p>

          <h2 className="mt-10 text-2xl font-normal text-primary md:mt-14 md:text-[28px] md:font-black md:leading-[74px]">
            Conheça os mais comuns:
          </h2>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-between gap-5 md:mt-20">
        <div className="hidden w-full grid-cols-2 gap-6 sm:grid-cols-2 md:hidden lg:grid lg:grid-cols-4">
          {categories.map(() => (
            <IconCard
              cardTitle="Próstata "
              cardDescription="É o segundo tipo mais comum entre os homens e atinge principalmente pessoas com mais de 65 anos."
            />
          ))}
        </div>

        <CommonCancers />

        <div className="hidden justify-center lg:flex">
          <BaseButton
            color="primary"
            className="w-full text-white md:w-[224px]"
          >
            Ver todos os tipos de câncer
          </BaseButton>
        </div>
      </div>

      <div className="mt-28 hidden grid-cols-3 gap-[26px] lg:grid">
        <MedicalServiceCard
          serviceTitle="OC Acesso"
          serviceDescription="A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência."
          actionButtonText="Exclusividade Oncoclínicas"
        />
        <MedicalServiceCard
          serviceTitle="OC Acesso"
          serviceDescription="A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência."
          actionButtonText="Exclusividade Oncoclínicas"
        />
        <MedicalServiceCard
          serviceTitle="OC Acesso"
          serviceDescription="A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência."
          actionButtonText="Exclusividade Oncoclínicas"
        />
      </div>

      <div className="relative mb-10 mt-20 w-full self-center lg:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          onInit={(swiper) => {
            onBeforeInit(swiper);
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.subtitle}>
              <MedicalServiceCard
                subtitle={service.subtitle}
                serviceTitle={service.serviceTitle}
                serviceDescription={service.serviceDescription}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex justify-center space-x-4 align-middle lg:hidden">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
          />
        </div>
      </div>
    </PageLayout>
  );
}
