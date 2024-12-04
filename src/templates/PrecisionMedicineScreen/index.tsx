import PageLayout from "@/components/PageLayout";
import PurpleBanner from "@/components/PurpleBanner";
import BannerWithImage from "@/components/BannerWithImage";
import SliderArrows from "@/components/SliderArrows";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { PrecisionMedicineScreenProps } from "./type";
import BannerWithVideo from "./components/BannerWithVideo";
import RoundedRectangle from "./components/RoundedRectangle";
import { cardElements } from "./components/RoundedRectangle/CardElements";
import PlayStoreContainer from "./components/PlayStoreContainer";
import ValuesAndMissionText from "./components/ValuesAndMIssionText";
import ExamsCard from "./components/ExamsCard";
import { genomicsExams, pacientSupport, patologicalExams } from "./exams";
import PlusCard from "./components/PlusCard";
import PrecisionMedicineUnitCard from "./components/UnitCard";
import { unitsData } from "./components/UnitCard/unitsMock";

export function PrecisionMedicineScreen({
  media,
}: PrecisionMedicineScreenProps): JSX.Element {
  const isVideo = media ? /\.(mp4|webm|ogg)$/i.test(media) : undefined;
  const { nextRef, prevRef, swiperRef, onBeforeInit } = useSwiperNavigation();

  return (
    <PageLayout title="Medicina de Precisão" showBreadcrumb>
      <div className="lg:hidden">
        <PurpleBanner
          subtitle="Conheça a OC Medicina de Precisão"
          description="A OC Medicina de Precisão engloba os laboratórios de Anatomia Patológica, Genômica e Big data que oferece um portfolio completo e de alta relevância clínica."
        />
        {media && (
          <div className="mb-6 w-full">
            {isVideo ? (
              <video src={media} controls className="w-full rounded-md">
                <track kind="captions" />
              </video>
            ) : (
              <img src={media} alt="Media" className="w-full rounded-md" />
            )}
          </div>
        )}
      </div>
      <div className="hidden lg:flex">
        <BannerWithVideo isVideo={isVideo} media={media} />
      </div>

      <ValuesAndMissionText />

      <RoundedRectangle cardElements={cardElements.cardElements} />

      <PlayStoreContainer />

      <div className="mb-7 mt-16 text-center">
        <h1 className="mb-11 font-lato-regular text-4xl text-primary-foreground">
          Nossos Exames
        </h1>
        <h4 className="mb-8 font-lato-regular text-3xl text-darkGray">
          Patologia
        </h4>
        <ExamsCard exams={patologicalExams} />

        <h4 className="mb-8 mt-20 font-lato-regular text-3xl text-darkGray">
          Genômica
        </h4>
        <ExamsCard exams={genomicsExams} />
      </div>

      <BannerWithImage
        title="Programas de Suporte ao Paciente"
        description="Para garantir o tratamento personalizado e de precisão, é importante assegurar aos nossos pacientes acesso à jornada molecular de testes."
        media="/assets/images/image 30.jpg"
        secondaryColor="primary-foreground"
      />

      <PlusCard exams={pacientSupport} />

      <BannerWithImage
        title="Programa de Apoio à Pesquisa"
        description="Com o objetivo de impulsionar a pesquisa na área de genômica na América Latina, a OC Medicina de Precisão fortalece seu compromisso ao oferecer o sistema de facilities, um novo serviço desenvolvido para oferecer uma solução que alia expertise e tecnologia de ponta, para auxiliar no desenvolvimento de pesquisas na área de genômica. Nossa equipe especializada e nosso ambiente tecnológico estão à disposição para apoiar projetos de pesquisa, fornecendo um ambiente propício e recursos avançados para o progresso científico. Este é um serviço versátil e eficiente, projetado para impulsionar a excelência e a inovação em estudos de diversos campos. Contamos com um parque tecnológico completo com as plataformas de sequenciamento Illumina (MiSeq, NextSeq e NovaSeq), permitindo análises do DNA e RNA por metodologias diver"
        media="/assets/images/image (1).jpg"
        isLeft
        primaryColor="primary-foreground"
        isLargeText
      />

      <div className="mb-8 mt-6 text-center">
        <h1 className="mb-5 font-lato-regular text-4xl text-primary">
          Nossas unidades
        </h1>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          onBeforeInit={(swiper) => onBeforeInit(swiper)}
        >
          {unitsData.map((unit) => (
            <SwiperSlide key={unit.id}>
              <PrecisionMedicineUnitCard
                id={unit.id}
                address={unit.address}
                city={unit.city}
                complement={unit.complement}
                hours={unit.hours}
                image={unit.image}
                unitName={unit.unitName}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
        />
      </div>
    </PageLayout>
  );
}
