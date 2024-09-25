import MainOptionsActions from "@/components/MainOptionsActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb.component";
import { options } from "@/utils/objectUtils";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import InformationSlider from "@/components/InformationSlider";
import BaseContainer from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavigationOptions } from "swiper/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ClinicalResearchScreen(): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const services = [
    {
      subtitle: "Saiba mais",
      serviceTitle: "OC na mídia",
      serviceDescription:
        "Confira o nosso clipping, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      actionButtonText: "Ver mais",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
    {
      subtitle: "Saiba mais",
      serviceTitle: "Serviço Oncológico",
      serviceDescription:
        "Acompanhe nossos serviços, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      actionButtonText: "Descubra",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
    {
      subtitle: "Novidades",
      serviceTitle: "Tecnologias",
      serviceDescription:
        "Tecnologias avançadas, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      actionButtonText: "Ver detalhes",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
  ];

  return (
    <main>
      <div className="block bg-gray-200 p-6 md:hidden">
        <Breadcrumb />
      </div>

      <PageHeader
        title="Pesquisa Clínica"
        subtitle="Programa de Pesquisa Clínica do Grupo Oncoclínicas"
        showContactSection={false}
      />

      <BaseContainer className="flex w-full flex-col py-0 md:py-20">
        <div className="hidden px-10 md:block md:px-0">
          <Breadcrumb />
        </div>

        <div className="mt-10 flex w-full flex-col-reverse justify-between gap-10 md:mt-20 lg:flex-row">
          <div className="flex w-full flex-col">
            <h1 className="max-w-full text-4xl font-extralight text-primary lg:text-6xl">
              Pesquisa Clínica Oncoclínicas
            </h1>

            <p className="mt-8 max-w-full text-base text-darkGray lg:max-w-unit-8xl lg:text-lg">
              Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas
              vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada
              e a participação de sete de suas unidades no Brasil.
            </p>

            <BaseButton
              className="mt-8 w-full font-bold text-white lg:mt-16 lg:w-80"
              color="primary"
              variant="solid"
              width="322px"
            >
              Como funciona
            </BaseButton>
          </div>

          <div className="hidden w-full flex-col items-center md:flex">
            <img
              src="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
              alt="Imagem de consulta"
              className="h-auto w-full object-cover lg:w-auto"
            />
          </div>
        </div>

        <div>
          <div className="mx-auto mt-20 hidden w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <MedicalServiceCard
                key={service.subtitle}
                subtitle={service.subtitle}
                serviceTitle={service.serviceTitle}
                serviceDescription={service.serviceDescription}
                actionButtonText={service.actionButtonText}
              />
            ))}
          </div>

          <div className="relative mt-20 w-full sm:hidden">
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
                if (swiper.params.navigation) {
                  const navigationParams = swiper.params
                    .navigation as NavigationOptions;
                  navigationParams.prevEl = prevRef.current;
                  navigationParams.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
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

            <div className="mt-4 flex justify-center space-x-4">
              <button
                ref={prevRef}
                type="button"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
                aria-label="Previous"
              >
                <IoIosArrowBack
                  className="text-primary dark:text-gray-800"
                  size={35}
                />
              </button>

              <button
                ref={nextRef}
                type="button"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
                aria-label="Next"
              >
                <IoIosArrowForward
                  className="text-primary dark:text-gray-800"
                  size={35}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <InformationSlider
            title="Pesquisa Clínica Oncoclínicas"
            description="Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a participação de sete de suas unidades no Brasil."
            image="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
          />
        </div>
      </BaseContainer>

      <MainOptionsActions options={options} rounded="rounded-none" />
    </main>
  );
}
