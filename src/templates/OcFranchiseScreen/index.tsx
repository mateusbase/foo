import PageLayout from "@/components/PageLayout";
import BaseButton from "@/components/Button";
import Image from "next/image";
import { useDeviceType } from "@/hooks/useDeviceType";
import { useState } from "react";
import FormularySection from "@/components/FormularySection";
import RightFullbleedBanner from "./components/RightFullbleedBanner";
import PurpleFullbleedBanner from "./components/PurpleFullBleedBanner";
import formInputs from "./formInputs";
import CountrySection from "./components/CountrySection";

export default function OcFranchiseScreen(): JSX.Element {
  const deviceType = useDeviceType();

  const [isOpen, setIsOpen] = useState(false);

  const imageSrc =
    deviceType === "desktop"
      ? "/assets/images/oc-franquia/dedication-banner/image (3).png"
      : "/assets/images/oc-franquia/dedication-banner/image (4).png";

  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <PageLayout
      title="OC Franquia"
      subtitle="Uma oportunidade transformadora para você, para a sua região e para os seus pacientes"
    >
      <RightFullbleedBanner
        title="Faça parte do maior grupo de oncologia da américa latina"
        src="/assets/images/oc-franquia/banner/image (3).png"
      />

      <CountrySection />

      <PurpleFullbleedBanner
        title="Dedicação para vencer o câncer, por meio de uma sólida equação de valor"
        description="Lideramos a transformação do tratamento oncológico no Brasil, adotando uma abordagem especializada, comandada por médicos de excelência em oncologia, que priorizam o cuidado integral e centrado no paciente."
        src={imageSrc}
      />

      <div className="mb-8 flex flex-col items-center">
        <Image
          src="/assets/images/oc-franquia/excellence-wheel/image 67.png"
          alt="Linhas de excelência em cuidados"
          width={1920}
          height={1080}
          className="size-[311px] md:size-[480px] lg:size-[480px]"
        />
        <BaseButton
          onClick={toggleOpen}
          className={`mt-16 bg-transparent text-6xl text-primary transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {">"}
        </BaseButton>

        {isOpen && (
          <Image
            src="/assets/images/oc-franquia/excellence-wheel/image 68.png"
            alt="Linhas de excelência em cuidados"
            width={1920}
            height={1080}
            className="w-311px h-325px md:h-[501px] md:w-[481px]"
          />
        )}
      </div>

      <FormularySection
        background
        title="Entre em contato"
        className="full-bleed-lg w-full lg:-mb-12"
        hasTelephone
        additionalFields={formInputs}
      />
    </PageLayout>
  );
}
