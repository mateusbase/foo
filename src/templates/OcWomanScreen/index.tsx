import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";
import BaseButton from "@/components/Button";
import BaseSelect from "@/components/Select";
import BenefitsCards from "./components/benefitsCards";
import womanBenefitsMock from "./data/woman-benefits.mock";
import VideoCard from "./components/videoCard";
import UnitsCard from "./components/UnitsCards";
import { unitsData } from "./data/unitsData";

export default function OcWomanScreen(): JSX.Element {
  const { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  const {
    prevRef: prevVideoRef,
    nextRef: nextVideoRef,
    swiperRef: swiperVideoRef,
    onBeforeInit: onBeforeVideoInit,
    currentIndex: currentVideoIndex,
  } = useSwiperNavigation();

  const {
    prevRef: prevLocationRef,
    nextRef: nextLocationRef,
    swiperRef: swiperLocationRef,
    onBeforeInit: onBeforeLocationInit,
    currentIndex: currentLocationIndex,
  } = useSwiperNavigation();

  return (
    <PageLayout
      title="OC Mulher"
      subtitle="O OC Mulher é um programa dedicado a saúde da mulher para o cuidado integral. O objetivo é o controle dos cânceres femininos com estratégias de prevenção, diagnóstico precoce, tratamento e suporte multiprofissional continuado."
      showBreadcrumb
    >
      <div className="full-bleed">
        <Image
          src="/assets/images/ocMulher/oc_mulher_banner.png"
          alt="OC Mulher"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <div className="flex flex-col gap-5 bg-custom-gradient-light px-10 pb-40 pt-12 font-lato-regular text-white md:py-14 md:pl-7 md:pr-20">
          <h1 className="mb-8 text-5xl">Espaço Saúde</h1>
          <p className="text-xl">
            O OC Mulher – Espaço Saúde é uma das iniciativas do programa.
            Localizado em algumas unidades da Oncoclínicas no Brasil, é um local
            que foi pensado para atender exclusivamente ao público feminino, com
            todo cuidado, privacidade e praticidade. Oferece atendimento de
            ponta, com tecnologia de última geração, corpo clínico e equipe
            multiprofissional especializados em saúde da mulher.
          </p>
        </div>
      </div>

      <div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => onBeforeInit(swiper)}
        >
          {womanBenefitsMock.map((benefit) => (
            <SwiperSlide key={benefit.id}>
              <BenefitsCards
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
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
          className="mb-7"
        />
      </div>

      <div className="full-bleed mt-4">
        <Image
          src="/assets/images/ocMulher/oc_mulher_banner_2.png"
          alt="OC Mulher"
          layout="responsive"
          width={1920}
          height={1080}
        />

        <div className="mb-5 flex flex-col gap-12 bg-custom-gradient-light px-10 pb-40 pt-12 font-lato-regular text-white md:py-14 md:pl-7 md:pr-20">
          <h1 className="text-center text-4xl">
            Ficou interessada em saber mais sobre o OC Mulher?
          </h1>
          <p className="text-center text-xl">
            Entre em contato para tirar dúvidas e entender como médicos e
            pacientes acessam o programa com nossos especialistas na prevenção e
            tratamento de tumores femininos.
          </p>
          <BaseButton className="border border-white bg-transparent text-white">
            <span className="text-lg">Conversar pelo WhatsApp</span>
          </BaseButton>
        </div>
      </div>

      <div className="mb-9">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop
          onBeforeInit={(swiper) => onBeforeVideoInit(swiper)}
        >
          <SwiperSlide>
            <VideoCard
              src="https://www.youtube.com/embed/GoHN_plQBqs"
              description="OC Mulher"
            />
          </SwiperSlide>
        </Swiper>
        <SliderArrows
          swiperRef={swiperVideoRef}
          prevRef={prevVideoRef}
          nextRef={nextVideoRef}
          showSwiperPagination
          currentIndex={currentVideoIndex}
          className="mt-7"
        />
      </div>
      <div className="full-bleed mb-11 bg-custom-gradient-light pb-10 pl-10 pr-7 pt-9 text-white">
        <h1 className="mb-12 text-2xl">Conheça os locais de atendimento</h1>
        <span className="text-xl">
          Saiba quais são os serviços, tratamentos e exames disponíveis em cada
          uma das unidades.
        </span>
        <p className="mb-3 mt-12 text-xl">Entre em contato:</p>

        <BaseSelect
          color="default"
          labelPlacement="outside"
          defaultSelectedKey="1"
          className="w-full"
          options={[
            { key: "1", value: "SP", label: "SP" },
            { key: "2", value: "RJ", label: "RJ" },
          ]}
          classNames={{
            trigger: "h-[54px] bg-white",
          }}
        />
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => onBeforeLocationInit(swiper)}
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
          {unitsData.map((unit) => (
            <SwiperSlide key={unit.id} className="mx-auto w-full">
              <UnitsCard
                key={unit.id}
                id={unit.id}
                address={unit.address}
                src={unit.image}
                complement={unit.complement}
                unitName={unit.unitName}
                city={unit.city}
                hours={unit.hours}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderArrows
          swiperRef={swiperLocationRef}
          prevRef={prevLocationRef}
          nextRef={nextLocationRef}
          showSwiperPagination
          currentIndex={currentLocationIndex}
          className="my-7"
        />
      </div>
    </PageLayout>
  );
}
