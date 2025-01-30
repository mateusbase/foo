import PageLayout from "@/components/PageLayout";
import GradientBanner from "@/components/GradientBanner";
import BaseButton from "@/components/Button";
import ContentCard from "@/components/ContentCard";
import InfoCard from "@/components/InfoCard";
import { useRef } from "react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/SliderArrows";
import AlertComponent from "./components/AlertComponent";
import InformationCard from "./components/InformationCard";
import SectionHeader from "./components/SectionHeader";
import { dataMock } from "./dataMock";
import CustomSwiper from "./components/CustomSwiper";

export default function WorkWithUsScreen(): JSX.Element {
  const prevRefContentCard = useRef<HTMLButtonElement>(null);
  const nextRefContentCard = useRef<HTMLButtonElement>(null);
  const { nextRef, prevRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  const infoCardContent = [
    {
      id: 1,
      title: "Colaboradores",
      content:
        "Dentro da Oncoclínicas, há espaço para diversas especialidades na área da saúde, gestão e administração.",
    },
    {
      id: 2,
      title: "Médicos",
      content:
        "A Oncoclínicas está sempre aberto para receber médicos alinhados com nossos valores.",
    },
  ];

  return (
    <PageLayout
      title="Trabalhe Conosco"
      subtitle="Saiba quais são os valores e os critérios técnicos exigidos para fazer parte da Oncoclínicas&Co, cujo foco é o paciente como centro de tudo."
    >
      <AlertComponent />

      <GradientBanner image="https://i.postimg.cc/hP4Kg3YK/DESK-Home-Blog-image2.png">
        <div className="mt-6 flex w-full flex-col py-8 lg:mt-16">
          <div className="mb-2 text-sm font-normal lg:text-2xl">
            Estrutura profissional
          </div>
          <div className="mt-2 text-2xl font-thin md:text-4xl lg:mt-8 lg:text-6xl">
            Nosso lema é <span className="font-light">“</span>
            <span className="font-medium">o paciente como centro de tudo</span>
            <span className="font-light">"</span>
          </div>
          <div className="mb-10 mt-6 lg:mt-8">
            <BaseButton
              className="mx-auto w-full border-white text-white lg:w-1/2"
              size="lg"
              variant="bordered"
            >
              Veja as oportunidades
            </BaseButton>
          </div>
        </div>
      </GradientBanner>

      <GradientBanner
        sideImage="right"
        image="https://i.postimg.cc/hP4Kg3YK/DESK-Home-Blog-image2.png"
      >
        <div className="mt-2 flex size-full flex-col">
          <div className="font-normal lg:text-lg">
            <p className="leading-5">
              Oncoclínicas&Co é o maior grupo dedicado ao tratamento do câncer
              na América Latina, com um modelo especializado e inovador focado
              em toda a jornada do tratamento oncológico, aliando eficiência
              operacional, atendimento humanizado e especialização por meio de
              um corpo clínico composto por mais de 2.700 médicos especialistas
              com ênfase em oncologia.
            </p>
            <p className="mt-3 leading-5">
              Com a missão de democratizar o tratamento oncológico, oferece um
              sistema completo que integra clínicas ambulatoriais a cancer
              centers de alta complexidade. Conta com 145 unidades em 39 cidades
              brasileiras, permitindo acesso de qualidade em todas as regiões
              que atua, alinhados aos padrões dos melhores centros de referência
              mundiais no tratamento do câncer.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold lg:text-2xl">Nossos valores:</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 gap-x-20 text-lg sm:grid-cols-2">
              <ul className="list-inside list-disc leading-5">
                <li>Integridade</li>
                <li>Trabalho em equipe</li>
                <li>Espírito de dono</li>
                <li>Simplicidade, objetividade e resolutividade (SOR)</li>
              </ul>
              <ul className="list-inside list-disc leading-5">
                <li>Resultado</li>
                <li>Respeito</li>
                <li>Meritocracia</li>
                <li>Liderança</li>
              </ul>
            </div>
          </div>
        </div>
      </GradientBanner>

      <div className="mt-14 flex w-full flex-col justify-center gap-9 lg:flex-row">
        <InformationCard>
          <p className="text-center text-xl md:text-2xl">
            Aqui você encontra as oportunidades de carreira na
            <span className="font-bold"> Oncocínicas</span>. Acha que este é o
            seu perfil? Então acesse as vagas e veja como.
          </p>
          <div className="mt-6 flex w-full justify-center">
            <BaseButton className="w-full bg-purpleMedium text-base text-white md:w-2/3 md:text-lg">
              Veja as oportunidades
            </BaseButton>
          </div>
        </InformationCard>

        <InformationCard background>
          <p className="text-center text-xl text-white md:text-2xl">
            A <span className="font-bold">Oncoclínicas&Co</span> está sempre
            aberto para receber novos colaboradores, que devem estar alinhados
            com nossos valores
          </p>
          <div className="mt-6 flex w-full justify-center">
            <BaseButton className="w-full bg-white text-base text-purpleMedium md:w-2/3 md:text-lg">
              Envie o seu currículo
            </BaseButton>
          </div>
        </InformationCard>
      </div>
      <SectionHeader
        title="Quer ser um de nossos colaboradores?"
        description="A Oncoclínicas&Co está sempre aberto para receber novos colaboradores, que devem estar alinhados com nossos valores e ter excelência técnica. Acha que este é o seu perfil? Então acesse as vagas e veja como."
      />
      <div className="mt-20 hidden grid-cols-1 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3">
        {dataMock.map((card) => (
          <ContentCard
            key={card.id}
            serviceTitle={card.title}
            serviceDescription={card.description}
            showButton={false}
          />
        ))}
      </div>

      <div className="mt-10 block grid-cols-3 gap-[26px] md:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => onBeforeInit(swiper)}
        >
          {dataMock.map((card) => (
            <SwiperSlide key={card.id}>
              <ContentCard
                key={card.id}
                serviceTitle={card.title}
                serviceDescription={card.description}
                showButton={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          showSwiperPagination
          currentIndex={currentIndex}
          className="mt-5"
        />
      </div>

      <div className="my-20 hidden grid-cols-2 gap-10 md:grid lg:grid">
        <InfoCard roundedSide="left">
          <div className="lg:min-h-[353px]">
            <h3 className="mt-5 text-3xl text-white lg:text-5xl">
              Colaboradores
            </h3>
            <h3 className="mt-5 max-w-md text-sm text-white lg:text-2xl">
              Dentro da Oncoclínicas, há espaço para diversas especialidades na
              área da saúde, gestão e administração.
            </h3>
            <BaseButton className="mt-10 h-[54px] w-80 border-1 bg-transparent text-white">
              Cadastre seu currículo
            </BaseButton>
          </div>
        </InfoCard>

        <InfoCard roundedSide="left">
          <div className="lg:min-h-[353px]">
            <h3 className="mt-5 text-3xl text-white lg:text-5xl">Médicos</h3>
            <h3 className="mt-5 max-w-md text-sm text-white lg:text-2xl">
              A Oncoclínicas está sempre aberto para receber médicos alinhados
              com nossos valores.
            </h3>
          </div>
        </InfoCard>
      </div>

      <div className="mt-10 block grid-cols-3 gap-[26px] md:hidden">
        <CustomSwiper
          slides={infoCardContent}
          prevRef={prevRefContentCard}
          nextRef={nextRefContentCard}
          renderSlide={(slide) => (
            <InfoCard roundedSide="left">
              <div>
                <h3 className="text-4xl text-white">{slide.title}</h3>
                <h3 className="mt-10 max-w-md text-sm font-bold text-white">
                  {slide.content}
                </h3>
                <BaseButton className="mt-10 w-full border-2 bg-transparent text-white">
                  Cadastre seu currículo
                </BaseButton>
              </div>
            </InfoCard>
          )}
        />
      </div>
    </PageLayout>
  );
}
