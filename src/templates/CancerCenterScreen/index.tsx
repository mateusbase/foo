import PageLayout from "@/components/PageLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/SliderArrows";
import UnitsCard from "./components/UnitsCard";
import { unitsMock } from "./components/unitsMock";

export default function CancerCenterScreen(): JSX.Element {
  const { nextRef, prevRef, onBeforeInit, swiperRef, currentIndex } =
    useSwiperNavigation();
  return (
    <PageLayout title="Primeiro Cancer Center Oncoclínicas como Membro Colaborativo Internacional do Dana-Farber Cancer Institute">
      <div className="flex flex-col-reverse lg:mt-10 lg:h-[688px] lg:flex-row">
        <div className="full-bleed bg-custom-gradient-dark p-10 lg:w-3/5 lg:rounded-bl-[100px] lg:px-16 xl:py-20">
          <h1 className="text-4xl text-white lg:text-5xl">
            Sobre a parceria colaborativa
          </h1>
          <p className="mt-10 !leading-6 text-white md:text-xl xl:text-2xl xl:!leading-7">
            A Oncoclínicas&Co, maior grupo dedicado ao tratamento do câncer na
            América Latina, e o Dana-Farber Cancer Institute, hospital de ensino
            afiliado à Faculdade de Medicina de Harvard e uma das principais
            instituições de tratamento do câncer e pesquisa oncológica do mundo,
            anunciam a expansão de sua colaboração com a inauguração do primeiro
            Cancer Center Oncoclínicas em parceria colaborativa com o
            Dana-Farber fora dos Estados Unidos. <br />
            <br />
            Belo Horizonte, em Minas Gerais, é a primeira cidade fora dos
            Estados Unidos a receber uma unidade de tratamento certificada como
            Membro Colaborativo Internacional do Dana-Farber, demonstrando
            compromisso com a excelência ao atender a uma ampla variedade de
            padrões de qualidade em oncologia.
          </p>
        </div>

        <div className="full-bleed size-full lg:w-2/4">
          <img
            alt="Banner cancer center"
            src="assets/images/cancer-center/cancer-center-banner.png"
            className="h-[689px] w-full object-cover"
          />
        </div>
      </div>

      <div className="my-10 hidden w-full justify-center md:flex">
        <img
          src="assets/images/cancer-center/cancer-center-logo-with-certificate.png"
          alt="Logo e certificado cancer center"
          className=""
        />
      </div>

      <div className="my-10 flex w-full flex-col items-center justify-center gap-10 md:hidden">
        <img
          src="assets/images/cancer-center/cancer-center-logo.png"
          alt="Logo e certificado cancer center"
          className="size-3/4"
        />
        <img
          src="assets/images/cancer-center/cancer-center-certificate.png"
          alt="Logo e certificado cancer center"
          className="size-3/4"
        />
      </div>

      <div className="full-bleed-md flex flex-col items-center lg:flex-row lg:items-end">
        <img
          src="assets/images/cancer-center/cancer-center-banner-web.png"
          alt="Banner cancer center 2"
          className="hidden object-cover lg:block"
        />
        <img
          src="assets/images/cancer-center/cancer-center-banner-tablet.png"
          alt="Banner cancer center 2"
          className="hidden w-full object-cover md:block lg:hidden"
        />
        <img
          src="assets/images/cancer-center/cancer-center-banner-mobile.png"
          alt="Banner cancer center 2"
          className="block w-full object-cover md:hidden"
        />

        <div className="w-full items-center justify-center rounded-none bg-custom-gradient-dark px-10 py-12 md:rounded-bl-[100px] lg:h-[562px] lg:w-full lg:rounded-none">
          <h1 className="text-[32px] text-white">
            Sobre o Dana-Farber Cancer Institute
          </h1>
          <p className="mt-10 !leading-6 text-white md:text-xl">
            O Dana-Farber Cancer Institute, afiliado à Harvard Medical School
            para ensino, é um dos principais centros mundiais de pesquisa e
            tratamento de câncer. É o único Cancer Center classificado entre os
            5 melhores hospitais pelo U.S. News and World Report's Best
            Hospitais para tratamento de câncer adulto e pediátrico. <br />
            <br /> Com a missão de reduzir o impacto do câncer através da
            pesquisa científica, atendimento clínico, educação, envolvimento com
            a comunidade e advocacy, oferece o que há de mais avançado no
            tratamento de câncer para adultos por meio do Dana-Farber Brigham
            Cancer Center e para crianças através do Dana-Farber Boston
            Children's Cancer and Blood Disorders Center.
            <br />
            <br /> O Dana-Farber é dedicado a um equilíbrio único e igualitário
            entre a pesquisa sobre o câncer e o cuidado, traduzindo os
            resultados das descobertas em novos tratamentos para pacientes
            localmente e ao redor do mundo.
          </p>
        </div>
      </div>

      <div className="my-14 flex w-full flex-col items-center justify-center gap-10">
        <h2 className="text-4xl text-primary">Nossas unidades</h2>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-28">
          {unitsMock.map((unit) => (
            <UnitsCard
              key={unit.id}
              id={unit.id}
              address={unit.address}
              unitName={unit.name}
              city={unit.cityState}
              hours={unit.openingHours}
            />
          ))}
        </div>

        <div className="relative mt-20 flex w-full lg:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onBeforeInit={(swiper) => onBeforeInit(swiper)}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {unitsMock.map((unit) => (
              <SwiperSlide key={unit.id}>
                <UnitsCard
                  id={unit.id}
                  address={unit.address}
                  unitName={unit.name}
                  city={unit.cityState}
                  hours={unit.openingHours}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-4 flex w-full justify-center space-x-4 md:hidden">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            currentIndex={currentIndex}
            showSwiperPagination
          />
        </div>
      </div>
    </PageLayout>
  );
}
