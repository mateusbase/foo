import BaseButton from "@/components/Button";
import { CardDoctor } from "@/components/CardDoctors";
import BaseSelect from "@/components/Select";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ClinicalBody = (): JSX.Element => {
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

  const doctors = [
    {
      id: 1,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/medico-alegre-um-rosto-feliz-na-profissao-medica-isolado-em-um-fundo-branco_94628-20220.jpg?w=1800",
    },
    {
      id: 2,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/a-presenca-iluminadora-da-enfermeira-isolada-em-um-fundo-branco-ai-generativo_94628-9638.jpg?w=1800",
    },
    {
      id: 3,
      name: "Carla Lira",
      crm: "123456",
      specialty: "Especialidade",
      rqe: "12345",
      location: "Hospital XYZ",
      imgSrc:
        "https://img.freepik.com/fotos-premium/mulher-prestadora-de-servicos-de-saude-em-scrub-wear-generative-ai_94628-7730.jpg?w=1800",
    },
  ];

  return (
    <div>
      <div className="mt-20 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between md:mt-32">
        <h2 className="text-2xl font-normal text-primary md:leading-[50px] 2xl:text-3xl">
          Corpo Clínico
        </h2>

        <div className="flex flex-col gap-5 sm:flex-row">
          <BaseSelect
            label="Especialidade"
            labelColor="primary"
            color="primary"
            radius="full"
            variant="bordered"
            className="w-full sm:w-[280px]"
            options={[
              { key: 1, value: "1", label: "Otorrino" },
              { key: 1, value: "2", label: "Cardiologista" },
            ]}
          />

          <BaseSelect
            label="Buscar por nome ou CRM"
            labelColor="primary"
            color="primary"
            radius="full"
            variant="bordered"
            className="w-full sm:w-[280px]"
            options={[
              { key: 1, value: "1", label: "" },
              { key: 1, value: "2", label: "" },
            ]}
          />
        </div>
      </div>

      <div className="mt-10 hidden grid-cols-1 gap-6 sm:grid-cols-2 lg:grid lg:grid-cols-3">
        {doctors.map((doctor) => (
          <CardDoctor key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <div className="relative mt-20 block w-full lg:hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
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
              spaceBetween: 40,
            },
          }}
        >
          {doctors.map((doctor) => (
            <SwiperSlide
              key={`slide-${doctor.id}`}
              aria-label={`Slide ${doctor.name}`}
            >
              <CardDoctor doctor={doctor} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex flex-col-reverse items-center justify-between space-x-4 md:flex-row">
          <div className="mt-4 flex w-full">
            <BaseButton
              color="primary"
              variant="bordered"
              className="w-full border-1 text-[18px] leading-[22px] text-primary md:w-72"
            >
              [+] Ver todos
            </BaseButton>
          </div>

          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            size={1}
            color="text-primary"
          />
        </div>
      </div>

      <BaseButton
        color="primary"
        variant="bordered"
        className="mt-8 hidden border-1 text-[18px] leading-[22px] text-primary sm:w-[176px] md:w-60 lg:block"
      >
        [+] Ver todos
      </BaseButton>
    </div>
  );
};

export default ClinicalBody;
