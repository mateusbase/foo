import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import { useDeviceType } from "@/hooks/useDeviceType";
import FormularySection from "@/components/FormularySection";
import { useState, useEffect } from "react";
import RightFullbleedBanner from "./components/RightFullbleedBanner";
import PurpleFullbleedBanner from "./components/PurpleFullBleedBanner";
import formInputs from "./formInputs";
import CountrySection from "./components/CountrySection";

export default function OcFranchiseScreen(): JSX.Element {
  const deviceType = useDeviceType();
  const [maxWidth, setMaxWidth] = useState<string>("100vw");

  useEffect(() => {
    const updateWidth = (): void => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      setMaxWidth(`calc(100vw - ${scrollbarWidth}px)`);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const imageSrc =
    deviceType === "desktop"
      ? "/assets/images/oc-franquia/dedication-banner/image (3).png"
      : "/assets/images/oc-franquia/dedication-banner/image (4).png";

  return (
    <PageLayout
      title="OC Franquias"
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

      <div className="mb-8 flex flex-col items-center self-center lg:mb-16 lg:flex-row">
        <Image
          src="/assets/images/oc-franquia/excellence-wheel/image 67.png"
          alt="Linhas de excelência em cuidados"
          width={1920}
          height={1080}
          className="size-[311px] md:size-[480px] lg:mr-20 lg:size-[350px] xl:mr-[180px] xl:size-[480px]"
        />

        <span className="mt-16 bg-transparent text-6xl text-primary lg:my-auto lg:text-8xl xl:text-9xl">
          {">"}
        </span>

        <Image
          src="/assets/images/oc-franquia/excellence-wheel/image 68.png"
          alt="Linhas de excelência em cuidados"
          width={1920}
          height={1080}
          className="h-325px w-[311px] md:h-[501px] md:w-[481px] lg:h-[450px] lg:w-[390px] xl:h-[501px] xl:w-[481px]"
        />
      </div>

      <FormularySection
        background
        title="Entre em contato"
        className="relative left-1/2 w-screen max-w-none -translate-x-1/2 lg:-mb-12"
        style={{ maxWidth }}
        hasTelephone
        additionalFields={formInputs}
      />
    </PageLayout>
  );
}
