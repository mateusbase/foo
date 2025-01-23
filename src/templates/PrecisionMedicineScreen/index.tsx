import PageLayout from "@/components/PageLayout";
import PurpleBanner from "@/components/PurpleBanner";
import BannerWithImage from "@/components/BannerWithImage";
import SliderArrows from "@/components/SliderArrows";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import BaseButton from "@/components/Button";
import BaseInput from "@/components/Input";
import InfoCard from "@/components/InfoCard";
import { LogoIcon } from "@/components/Icons";
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
import InformationCard from "../WorkWithUsScreen/components/InformationCard";
import AccreditationsSection from "./components/AccreditationsSection";
import LastBanner from "./components/LastBanner";

export function PrecisionMedicineScreen({
  media,
}: PrecisionMedicineScreenProps): JSX.Element {
  const isVideo = media ? /\.(mp4|webm|ogg)$/i.test(media) : undefined;
  const { nextRef, prevRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  return (
    <PageLayout title={<LogoIcon size={1.5} />} showBreadcrumb>
      <div className="h-auto lg:hidden">
        <PurpleBanner
          subtitle="Conheça a OC Medicina de Precisão"
          description="A OC Medicina de Precisão engloba os laboratórios de Anatomia Patológica, Genômica e Big data que oferece um portfolio completo e de alta relevância clínica."
        />
        {media && (
          <div className="full-bleed mb-6">
            {isVideo ? (
              <video src={media} controls className="w-full rounded-md">
                <track kind="captions" />
              </video>
            ) : (
              <img src={media} alt="Media" className="w-full" />
            )}
          </div>
        )}
      </div>

      <div className="mt-10 hidden lg:flex">
        <BannerWithVideo isVideo={isVideo} media={media} />
      </div>

      <ValuesAndMissionText />

      <RoundedRectangle cardElements={cardElements.cardElements} />

      <PlayStoreContainer />

      <div className="mb-7 mt-16 text-center">
        <h1 className="mb-11 font-lato-regular text-4xl text-primary lg:text-6xl">
          Nossos Exames
        </h1>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:flex lg:flex-col">
          <div className="items-center justify-center">
            <h4 className="mb-8 font-lato-regular text-3xl text-darkGray lg:text-5xl">
              Patologia
            </h4>
            <ExamsCard exams={patologicalExams} />
          </div>
          <div className="items-center justify-center">
            <h4 className="mb-8 font-lato-regular text-3xl text-darkGray lg:text-5xl">
              Genômica
            </h4>
            <ExamsCard exams={genomicsExams} />
          </div>
        </div>
      </div>

      <div className="full-bleed mb-9 md:w-full">
        <BannerWithImage
          title="Programas de Suporte ao Paciente"
          description="Para garantir o tratamento personalizado e de precisão, é importante assegurar aos nossos pacientes acesso à jornada molecular de testes."
          media="/assets/images/image 30.jpg"
          secondaryColor="primary-foreground"
        />
      </div>
      <PlusCard exams={pacientSupport} />

      <div className="relative left-1/2 mt-11 w-screen -translate-x-1/2 md:hidden md:w-full lg:flex">
        <BannerWithImage
          title="Programa de Apoio à Pesquisa"
          description="Com o objetivo de impulsionar a pesquisa na área de genômica na América Latina, a OC Medicina de Precisão fortalece seu compromisso ao oferecer o sistema de facilities, um novo serviço desenvolvido para oferecer uma solução que alia expertise e tecnologia de ponta, para auxiliar no desenvolvimento de pesquisas na área de genômica. Nossa equipe especializada e nosso ambiente tecnológico estão à disposição para apoiar projetos de pesquisa, fornecendo um ambiente propício e recursos avançados para o progresso científico. Este é um serviço versátil e eficiente, projetado para impulsionar a excelência e a inovação em estudos de diversos campos. Contamos com um parque tecnológico completo com as plataformas de sequenciamento Illumina (MiSeq, NextSeq e NovaSeq), permitindo análises do DNA e RNA por metodologias diver"
          media="/assets/images/image (1).jpg"
          isLeft
          primaryColor="primary-foreground"
          isLargeText
        />
      </div>

      <div className="full-bleed mt-24 hidden min-h-[620px] px-14 py-9 md:flex lg:hidden">
        <InfoCard roundedSide="left">
          <h2 className="mb-10 mt-7 text-4xl font-bold text-white">
            Programa de Apoio à Pesquisa
          </h2>
          <p className="mb-28 text-xl text-white">
            Com o objetivo de impulsionar a pesquisa na área de genômica na
            América Latina, a OC Medicina de Precisão fortalece seu compromisso
            ao oferecer o sistema de facilities, um novo serviço desenvolvido
            para oferecer uma solução que alia expertise e tecnologia de ponta,
            para auxiliar no desenvolvimento de pesquisas na área de genômica.
            <br />
            Nossa equipe especializada e nosso ambiente tecnológico estão à
            disposição para apoiar projetos de pesquisa, fornecendo um ambiente
            propício e recursos avançados para o progresso científico. Este é um
            serviço versátil e eficiente, projetado para impulsionar a
            excelência e a inovação em estudos de diversos campos.
            <br />
            Contamos com um parque tecnológico completo com as plataformas de
            sequenciamento Illumina (MiSeq, NextSeq e NovaSeq), permitindo
            análises do DNA e RNA por metodologias diver
          </p>
        </InfoCard>
      </div>

      <div className="my-8 text-center md:text-left lg:text-center lg:align-middle">
        <h1 className="mb-8 font-lato-regular text-4xl text-primary md:ml-24 lg:ml-0">
          Nossas unidades
        </h1>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop
          onBeforeInit={(swiper) => onBeforeInit(swiper)}
        >
          {unitsData.map((unit) => (
            <SwiperSlide className="mb-8">
              <PrecisionMedicineUnitCard
                key={unit.id}
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

        <div className="lg:hidden">
          <SliderArrows
            swiperRef={swiperRef}
            currentIndex={currentIndex}
            prevRef={prevRef}
            nextRef={nextRef}
            showSwiperPagination
          />
        </div>
      </div>

      <div className="my-8 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center">
        <InformationCard className="min-h-[225px] px-14 py-6 lg:h-[566px] lg:w-[30%]">
          <p className="mb-6 text-center font-lato-black text-4xl text-darkGray">
            Fale conosco
          </p>
          <p className="text-center font-lato-thin text-darkGray">
            Nossa equipe dedicada está à disposição para atendê-lo e oferecer
            todo o suporte necessário.
          </p>
          <div className="mt-6 flex w-full justify-center">
            <BaseButton className="w-full bg-purpleMedium px-32 py-3 text-center font-lato-thin text-lg text-white md:h-14 md:w-64 md:text-xl">
              Envie uma mensagem
            </BaseButton>
          </div>
        </InformationCard>

        <InformationCard
          background
          className="flex min-h-[450px] w-full flex-col gap-4 px-6 py-14 md:py-4 lg:h-[566px] lg:w-[30%]"
        >
          <p className="mb-6 text-center font-lato-bold text-2xl text-white lg:text-2xl 2xl:text-3xl">
            Participe das Quintas Moleculares
          </p>
          <p className="mb-5 text-center font-lato-thin text-white lg:text-sm 2xl:text-base">
            Reuniões Multidisciplinares que ocorrem por videoconferência que
            permitem discussões de casos, a fim de educar a comunidade médica a
            respeito da indicação e interpretação de testes moleculares.
          </p>
          <BaseInput
            className="mx-auto rounded-full bg-white md:w-72 lg:w-[90%]"
            placeholder="Digite aqui o seu melhor e-mail"
          />

          <div className="mt-6 flex justify-center">
            <BaseButton className="mb-9 bg-white px-32 py-7 font-lato-thin text-lg text-purpleMedium md:mb-4 md:w-64 lg:w-[90%]">
              Inscreva-se
            </BaseButton>
          </div>
        </InformationCard>

        <InformationCard className="flex min-h-[450px] w-full flex-col justify-between gap-4 p-6 lg:h-[566px] lg:w-[30%] lg:py-[50px] 2xl:py-[85px]">
          <p className="mb-6 text-center font-lato-bold text-2xl text-darkGray lg:mb-3 lg:text-xl 2xl:mb-6 2xl:text-3xl">
            Participe das Quintas Patológicas
          </p>
          <p className="mb-6 text-center font-lato-thin text-darkGray lg:mb-3 lg:text-sm 2xl:mb-6 2xl:text-base">
            Encontros virtuais para apresentação de temas relevantes em
            patologia com impacto em decisões oncológicas, além de apresentação
            de casos clínicos. As sessões acontecem por videoconferência a cada
            duas semanas e são abertas ao público.
          </p>
          <BaseInput
            className="mx-auto rounded-full border-darkGray bg-white md:w-64 lg:w-[90%]"
            placeholder="Digite aqui o seu melhor e-mail"
          />

          <div className="mt-6 flex justify-center lg:mt-3 2xl:mt-6">
            <BaseButton className="mb-9 bg-purpleMedium px-32 py-7 font-lato-thin text-lg text-white md:w-64 lg:w-[90%]">
              Inscreva-se
            </BaseButton>
          </div>
        </InformationCard>
      </div>

      <LastBanner />

      <AccreditationsSection />
    </PageLayout>
  );
}
