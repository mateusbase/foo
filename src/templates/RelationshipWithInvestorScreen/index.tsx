import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BaseButton from "@/components/Button";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PageLayout from "@/components/PageLayout";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";
import { services } from "./mock";

export default function RelationshipWithInvestorScreen(): JSX.Element {
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();
  return (
    <PageLayout
      title="Investidores Oncoclínicas&Co"
      subtitle="Baseado em seu compromisso com a ética e a transparência, a Oncoclínicas&Co. disponibiliza informações e documentos aos seus investidores."
    >
      <div className="my-10 flex w-full flex-col-reverse justify-between gap-10 md:mt-2 md:flex-row lg:mt-10">
        <div className="flex w-full flex-col lg:max-w-md">
          <h1 className="max-w-full text-4xl font-light text-primary lg:text-6xl">
            Relações com investidores
          </h1>

          <p className="mt-8 max-w-full text-base text-darkGray lg:max-w-7xl lg:text-2xl">
            A Oncoclínicas é o maior prestador no mercado de oncologia clínica
            privada do Brasil em termos de receita, contando com 145 unidades
            estrategicamente localizadas em 39 cidades brasileiras.
          </p>
          <div className="mt-6 flex items-center justify-center md:hidden lg:flex">
            <BaseButton
              className="w-full font-bold text-white lg:mt-16 lg:w-80"
              color="primary"
              variant="solid"
            >
              Acesse
            </BaseButton>
          </div>
        </div>

        <div className="flex w-full flex-col items-end">
          <img
            src="https://i.postimg.cc/PxrFcXTm/Captura-de-tela-2024-11-21-145049.png"
            alt="Imagem de consulta"
            className="h-auto w-full lg:w-auto"
          />
        </div>
      </div>

      <div className="mb-10 hidden items-center justify-center md:flex lg:hidden">
        <BaseButton
          className="w-[322px] font-bold text-white"
          color="primary"
          variant="solid"
        >
          Acesse
        </BaseButton>
      </div>

      <div>
        <div className="mx-auto my-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-1 md:hidden lg:grid lg:grid-cols-3">
          {services.map((service) => (
            <MedicalServiceCard
              key={service.id}
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
            />
          ))}
        </div>

        <div className="hidden md:block lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            loop
            onInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
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

          <div className="mt-10 flex justify-center space-x-4">
            <SliderArrows
              swiperRef={swiperRef}
              prevRef={prevRef}
              nextRef={nextRef}
              size={1}
              color="text-primary"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
