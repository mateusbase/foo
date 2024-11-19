import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";
import EventCard from "@/components/EventsCard";
import MedicalServiceCard from "@/components/MedicalServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/SliderArrows";
import AcademyCard from "./components/AcademyCard";
import EducationalCard from "./components/EducationalCard";
import SliderVideos from "./components/SliderVideos";
import { events, services } from "./mock";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function OcInstitute(): JSX.Element {
  const { t } = useTranslation();
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

  return (
    <PageLayout
      title={t("oc_institute.title")}
      subtitle={t("oc_institute.subtitle")}
    >
      <div className="mt-10 w-full">
        <EducationalCard />
      </div>

      <div className="mt-28">
        <AcademyCard />
      </div>

      <div className="flex flex-col space-y-4 lg:mt-40 lg:items-center lg:text-center">
        <div className="my-10">
          <p className="text-2xl text-primary lg:text-6xl">
            Instituto Oncoclínicas
          </p>
          <p className="text-darkGray lg:text-2xl">
            Produção e compartilhamento de ciência, tecnologia, inovação e
            educação para a área de saúde.
          </p>
        </div>

        <div className="w-full">
          <SliderVideos />
        </div>

        <div className="flex w-full flex-row gap-14">
          <div className="max-w-[555px]">
            <h1 className="text-left text-[42px] font-light text-darkGray">
              Agenda 2024
            </h1>
            <p className="mt-10 text-left text-darkGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              hendrerit magna sit amet ultricies porttitor. Quisque fringilla ut
              orci a venenatis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent hendrerit magna sit amet ultricies
              porttitor. Quisque fringilla ut orci a venenatis.
            </p>
            <div className="mt-10 flex h-40 w-full cursor-pointer items-end rounded-3xl bg-primary p-6 hover:bg-primary-foreground">
              <h1 className="text-left text-4xl font-light text-white">
                Agenda 2024
              </h1>
            </div>
          </div>

          <div className="flex flex-row gap-10">
            <EventCard key="Evento Teste" event={events[0]} />
            <EventCard key="Evento Teste" event={events[1]} />
          </div>
        </div>

        <div>
          <div className="mx-auto mt-40 hidden w-full grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
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
              slidesPerView={3}
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
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
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
      </div>
    </PageLayout>
  );
}
