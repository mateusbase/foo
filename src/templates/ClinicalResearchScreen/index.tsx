import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import PageLayout from "@/components/PageLayout";
import { Link } from "@heroui/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";
import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import { Swiper as SwiperInstance } from "swiper/types";
import { services } from "./mock";
import TermsOfConsentBanner from "./components/TermsOfConsentBanner";

export default function ClinicalResearchScreen(): JSX.Element {
  const { nextRef, prevRef, swiperRef, currentIndex, onBeforeInit } =
    useSwiperNavigation();

  return (
    <>
      <PageLayout
        title="Pesquisa Clínica"
        subtitle="Programa de Pesquisa Clínica do Grupo Oncoclínicas"
        mainOptions={false}
      >
        <div className="mt-10 flex w-full flex-col-reverse justify-between gap-10 md:mt-20 lg:mt-0 lg:flex-row">
          <div className="flex w-full flex-col">
            <h1 className="max-w-full text-5xl font-light text-primary 2xl:text-6xl">
              Pesquisa Clínica Oncoclínicas
            </h1>

            <div className="lg:mb-14">
              <p className="mt-8 max-w-full text-xl font-medium text-darkGray lg:max-w-7xl 2xl:text-2xl">
                Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas
                vem sendo desenvolvido, e, hoje, conta com uma gestão
                centralizada e a participação de sete de suas unidades no
                Brasil.
              </p>
            </div>

            <Link href="/medicos/pesquisa-clinica/como-funciona">
              <BaseButton
                className="hidden font-bold text-white lg:mt-16 lg:flex lg:w-80"
                color="primary"
                variant="solid"
                width="322px"
              >
                Conheça
              </BaseButton>
              <BaseButton
                className="hidden font-bold text-white md:mt-8 md:flex md:w-1/2 lg:hidden"
                color="primary"
                variant="solid"
                width="322px"
              >
                Como funciona
              </BaseButton>
              <BaseButton
                className="mt-8 flex w-full font-bold text-white md:hidden"
                color="primary"
                variant="solid"
                width="322px"
              >
                Buscar
              </BaseButton>
            </Link>
          </div>

          <div className="hidden w-full flex-col items-center lg:flex">
            <img
              src="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
              alt="Imagem de consulta"
              className="h-auto w-full object-cover lg:w-auto"
            />
          </div>
        </div>

        <div className="mb-10">
          <div className="mt-20 hidden gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <MedicalServiceCard
                key={service.subtitle}
                subtitle={service.subtitle}
                serviceTitle={service.serviceTitle}
                serviceDescription={service.serviceDescription}
                isClinicalResearch
              />
            ))}
          </div>

          <div className="md:flex lg:hidden">
            <div className="relative mt-20 w-full">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop
                onBeforeInit={(swiper: SwiperInstance) => onBeforeInit(swiper)}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.subtitle}>
                    <MedicalServiceCard
                      subtitle={service.subtitle}
                      serviceTitle={service.serviceTitle}
                      serviceDescription={service.serviceDescription}
                      isClinicalResearch
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-4 justify-center space-x-4 md:flex">
                <SliderArrows
                  swiperRef={swiperRef}
                  prevRef={prevRef}
                  nextRef={nextRef}
                  currentIndex={currentIndex}
                  showSwiperPagination
                  size={1}
                  color="text-primary-foreground"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 mt-20 hidden lg:flex">
          <TermsOfConsentBanner />
        </div>
      </PageLayout>
      <div className="hidden lg:block">
        <MainOptionsActions options={options} rounded="rounded-none" />
      </div>
      <div className="block lg:hidden">
        <TermsOfConsentBanner />
      </div>
    </>
  );
}
