import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PageLayout from "@/components/PageLayout";
import { Link } from "@nextui-org/react";

export default function ClinicalResearchScreen(): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const services = [
    {
      subtitle: "Conheça",
      serviceTitle: "Comitê nacional de pesquisa",
      serviceDescription:
        "Confira os profissionais que integram o Comitê Nacional de Pesquisa Clínica, Equipe de Abrangência Nacional.",
      actionButtonText: "Ver mais",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
    {
      subtitle: "Capacitação e treinamento",
      serviceTitle: "Parcerias para ensino",
      serviceDescription:
        "Conheça as instituições parceiras do Grupo para ensino, pesquisa, eventos, capacitação, treinamento e atualização de profissionais.",
      actionButtonText: "Descubra",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
    {
      subtitle: "Descubra",
      serviceTitle: "Estudos clínicos abertos",
      serviceDescription:
        "Contribua com o desenvolvimento de soluções para a saúde e qualidade de vida de todos.",
      actionButtonText: "Ver detalhes",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
  ];

  return (
    <PageLayout
      title="Pesquisa Clínica"
      subtitle="Programa de Pesquisa Clínica do Grupo Oncoclínicas"
    >
      <div className="mt-10 flex w-full flex-col-reverse justify-between gap-10 md:mt-20 lg:flex-row">
        <div className="flex w-full flex-col">
          <h1 className="max-w-full text-3xl font-light text-primary lg:text-6xl">
            Pesquisa Clínica Oncoclínicas
          </h1>

          <div className="w-3/4">
            <p className="mt-8 max-w-full text-base font-medium text-darkGray lg:max-w-7xl lg:text-2xl">
              Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas
              vem sendo desenvolvido, e, hoje, conta com uma gestão centralizada
              e a participação de sete de suas unidades no Brasil.
            </p>
          </div>

          <Link href="/medicos/pesquisa-clinica/como-funciona">
            <BaseButton
              className="mt-8 w-full font-bold text-white lg:mt-16 lg:w-80"
              color="primary"
              variant="solid"
              width="322px"
            >
              Conheça
            </BaseButton>
          </Link>
        </div>

        <div className="hidden w-full flex-col items-center md:flex">
          <img
            src="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
            alt="Imagem de consulta"
            className="h-auto w-full object-cover lg:w-auto"
          />
        </div>
      </div>

      <div className="mb-10">
        <div className="mx-auto mt-20 hidden w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <MedicalServiceCard
              key={service.subtitle}
              subtitle={service.subtitle}
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
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
              className="group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
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
              className="group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
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

      <div className="mt-20 hidden md:flex">
        <div className="relative flex h-[536px] w-full justify-between text-white">
          <div className="flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] bg-darkGray px-20 py-10">
            <div>
              <p className="mb-8 mt-20 text-5xl font-light">
                Termo de Consentimento
              </p>
              <p className="mb-32 text-2xl">
                O Termo de Consentimento Livre Esclarecido (TCLE) é o documento
                que explica todos os procedimentos, vantagens e desvantagens de
                ser um participante da pesquisa.
              </p>
            </div>
          </div>

          <div className="h-full w-1/2">
            <img
              src="https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png"
              alt="Imagem 1"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
