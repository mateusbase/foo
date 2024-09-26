import MainOptionsActions from "@/components/MainOptionsActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HealthServiceCard from "@/components/HealthServiceCard";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { options } from "@/utils/objectUtils";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { NavigationOptions } from "swiper/types";
import PageLayout from "@/components/PageLayout";

export default function AllAboutCancerScreen(): JSX.Element {
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

  const cards = [
    {
      id: 1,
      serviceTitle: "OC Acesso",
      serviceDescription:
        "A solução da Oncoclínicas que surgiu para facilitar o acesso dos pacientes a um tratamento de excelência.",
    },
    {
      id: 2,
      serviceTitle: "Análise Patológica",
      serviceDescription:
        "Técnica responsável pela análise de células e tecidos com alterações oncológicas.",
    },
    {
      id: 3,
      serviceTitle: "Tratamento Oncológico",
      serviceDescription:
        "Um serviço especializado em oferecer tratamentos de ponta para diversos tipos de câncer.",
    },
  ];

  return (
    <PageLayout>
      <div className="mt-20 flex justify-start">
        <div className="text-left md:text-center">
          <h2 className="text-2xl font-extralight text-primary md:text-title-xl md:font-black md:leading-[74px]">
            O que é o câncer?
          </h2>

          <p className="mt-4 text-base text-darkGray md:text-[28px] md:font-medium md:leading-[32px]">
            Nesta série de informações confeccionadas pelo Grupo Oncoclínicas,
            você poderá entender mais sobre o que é o câncer, seus tipos,
            tratamentos disponíveis na clínica e alertas sobre prevenção e
            qualidade de vida.
          </p>

          <h2 className="mt-14 hidden text-2xl font-extralight text-primary md:block md:text-[28px] md:font-black md:leading-[74px]">
            Leia o conteúdo abaixo
          </h2>
        </div>
      </div>

      <div className="mt-20 flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 md:pr-16">
          <h2 className="text-2xl font-extralight text-primary md:text-[40px] md:font-black md:leading-[48px]">
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

        <div className="mt-10 hidden w-full grid-cols-1 gap-6 md:mt-0 md:grid md:w-1/2 md:grid-cols-2">
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            showButton={false}
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            showButton={false}
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            showButton={false}
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            showButton={false}
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
            showButton={false}
          />
        </div>

        <div className="mt-10 block grid-cols-3 gap-[26px] md:hidden">
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
            {cards.map((service) => (
              <SwiperSlide key={service.id}>
                <HealthServiceCard
                  serviceTitle="Análise Patológica"
                  serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
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

      <div className="mt-10 flex justify-start md:mt-32 md:justify-center">
        <div className="text-left md:text-center">
          <h2 className="text-2xl font-extralight text-primary md:text-title-xl md:font-black md:leading-[74px]">
            Confira os tipos de câncer mais comuns no Brasil
          </h2>
          <p className="mt-4 text-base text-darkGray md:text-[28px] md:font-medium md:leading-[32px]">
            O câncer se desenvolve em praticamente qualquer parte do corpo e
            varia em tipos e gravidade. Selecione abaixo a parte do corpo que
            deseja pesquisar ou busque pelo órgão / nome do câncer. Conheça os
            mais comuns:
          </p>

          <h2 className="mt-10 text-2xl font-extralight text-primary md:mt-14 md:text-[28px] md:font-black md:leading-[74px]">
            Conheça os mais comuns:
          </h2>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-between gap-5 md:mt-20">
        <div className="hidden w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid lg:grid-cols-4">
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
          <HealthServiceCard
            serviceTitle="Análise Patológica"
            serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
          />
        </div>

        <div className="block grid-cols-3 gap-[26px] md:hidden">
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
            {cards.map((service) => (
              <SwiperSlide key={service.id}>
                <HealthServiceCard
                  serviceTitle="Análise Patológica"
                  serviceDescription="Técnica responsável pela análise de células e tecidos com alterações oncológicas."
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

        <div className="flex justify-center">
          <BaseButton
            color="primary"
            className="w-full text-white md:w-[224px]"
          >
            Ver todos os tipos de câncer
          </BaseButton>
        </div>
      </div>

      <div className="mt-28 hidden grid-cols-3 gap-[26px] md:grid">
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

      <div className="relative mb-10 mt-20 w-full sm:hidden">
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

      <MainOptionsActions options={options} rounded="rounded-none" />
    </PageLayout>
  );
}
