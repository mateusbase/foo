import PageLayout from "@/components/PageLayout";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/SliderArrows";
import BaseContainer from "@/components/Container";
import MainOptionsActions from "@/components/MainOptionsActions";
import { options } from "@/utils/objectUtils";
import { LogoIcon } from "@/components/Icons";
import AcademyCard from "./components/AcademyCard";
import EducationalCard from "./components/EducationalCard";
import SliderVideos from "./components/SliderVideos";
import { videosContents } from "./mock";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderMedicalService from "./components/SliderMedicalService";
import Agenda from "./components/Agenda";

export default function OcInstitute(): JSX.Element {
  const { t } = useTranslation();
  const { nextRef, prevRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  return (
    <>
      <PageLayout
        title={t("oc_institute.title")}
        subtitle={t("oc_institute.subtitle")}
        mainOptions={false}
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

          <div className="w-full">
            <Agenda />
          </div>

          <div>
            <SliderMedicalService />
          </div>
        </div>
      </PageLayout>

      <div className="mt-10 flex bg-gray-foreground py-20">
        <BaseContainer className="w-11/12 md:w-full">
          <div className="mx-auto max-w-screen-2xl px-4">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-center text-2xl text-primary md:text-6xl md:font-light">
                Parceiros
              </h1>
              <p className="text-center text-darkGray md:text-[26px]">
                Empresas que apoiam o Instituto Oncoclinicas
              </p>
            </div>

            <div className="mt-20">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                loop
                onBeforeInit={(swiper) => onBeforeInit(swiper)}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                  },
                }}
              >
                {videosContents.map((content) => (
                  <SwiperSlide key={content.id}>
                    <LogoIcon size={0.8} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-4 flex justify-center space-x-4">
                <SliderArrows
                  swiperRef={swiperRef}
                  prevRef={prevRef}
                  nextRef={nextRef}
                  showSwiperPagination
                  currentIndex={currentIndex}
                  size={1}
                  color="text-primary"
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>

      <MainOptionsActions options={options} rounded="none" />
    </>
  );
}
