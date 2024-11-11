import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NavigationOptions } from "swiper/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PageLayout from "@/components/PageLayout";

export default function RelationshipWithInvestorScreen(): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const services = [
    {
      id: 1,
      serviceTitle: "Comitê nacional de pesquisa",
      serviceDescription:
        "Confira os profissionais que integram o Comitê Nacional de Pesquisa Clínica, Equipe de Abrangência Nacional.",
      actionButtonText: "Ver mais",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
    {
      id: 2,
      serviceTitle: "Parcerias para ensino",
      serviceDescription:
        "Conheça as instituições parceiras do Grupo para ensino, pesquisa, eventos, capacitação, treinamento e atualização de profissionais.",
      actionButtonText: "Descubra",
      backgroundImageUrl:
        "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
    },
    {
      id: 3,
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
      title="Investidores Oncoclínicas&Co"
      subtitle="Baseado em seu compromisso com a ética e a transparência, a Oncoclínicas&Co. disponibiliza informações e documentos aos seus investidores."
    >
      <div className="mt-10 flex w-full flex-col-reverse justify-between gap-10 md:mt-20 lg:flex-row">
        <div className="flex w-full flex-col">
          <h1 className="max-w-full text-4xl font-light text-primary lg:text-6xl">
            Relações com investidores
          </h1>

          <p className="mt-8 max-w-full text-base text-darkGray lg:max-w-7xl lg:text-lg">
            Desde 2018, o Programa de Pesquisa Clínica do Grupo Oncoclínicas vem
            sendo desenvolvido, e, hoje, conta com uma gestão centralizada e a
            participação de sete de suas unidades no Brasil.
          </p>

          <BaseButton
            className="mt-8 w-full font-bold text-white lg:mt-16 lg:w-80"
            color="primary"
            variant="solid"
          >
            Acesse
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
              key={service.id}
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
            />
          ))}
        </div>

        <div className="relative mb-20 mt-10 w-full sm:hidden">
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
              <SwiperSlide key={service.id}>
                <MedicalServiceCard
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
    </PageLayout>
  );
}
