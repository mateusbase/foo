import PageLayout from "@/components/PageLayout";
import { useDeviceType } from "@/hooks/useDeviceType";
import BaseSwiper from "@/components/BaseSwiper";
import BaseButton from "@/components/Button";
import Image from "next/image";
import SpecialistCard from "./SpecialistCards";
import reasonsMock from "./reasonsMock";
import ReasonsCard from "./ReasonsCards";
import ResidenceFullBanner from "./ResidenceFullBanner";

export default function ResidenceScreen(): JSX.Element {
  const deviceType = useDeviceType();
  const smallBanner = "/assets/images/residencia/Mask group.png";
  const mediumBanner = "/assets/images/residencia/Group 633 (1).png";
  const largeBanner = "/assets/images/residencia/Group 633 (2).png";

  const smallSpecialtyImage = "/assets/images/residencia/image (3).png";
  const mediumSpecialtyImage = "/assets/images/residencia/image (15).png";
  const largeSpecialtyImage = "/assets/images/residencia/image (42).png";

  const getBanner = (): string => {
    switch (deviceType) {
      case "mobile":
        return smallBanner;
      case "tablet":
        return mediumBanner;
      case "desktop":
        return largeBanner;
      default:
        return smallBanner;
    }
  };

  const getSpecialtyImage = (): string => {
    switch (deviceType) {
      case "mobile":
        return smallSpecialtyImage;
      case "tablet":
        return mediumSpecialtyImage;
      case "desktop":
        return largeSpecialtyImage;
      default:
        return smallSpecialtyImage;
    }
  };

  return (
    <PageLayout title="Instituto Oncoclínicas" subtitle="Residência 2025">
      <div className="mt-10 flex items-center justify-center">
        <Image
          width={1920}
          height={1080}
          src={getBanner()}
          alt="Banner OC Residência"
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="mt-10 block flex-col lg:my-[89px] lg:h-[555px] lg:w-1/2 lg:justify-center">
          <h1 className="mb-4 text-2xl text-primary md:w-4/5 md:text-3xl lg:text-xl xl:text-3xl">
            A porta de entrada para se tornar um dos nosso especialistas
            renomados está aberta.
          </h1>
          <SpecialistCard />
        </div>
        <div className="flex justify-center md:w-full lg:w-1/2">
          <Image
            width={1920}
            alt="Banner enfermeiros sorrindo"
            height={1080}
            src={getSpecialtyImage()}
            className="block w-full object-fill lg:mt-[89px] lg:h-[555px] xl:h-[601px]"
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="mb-7 text-2xl text-primary md:mb-8 md:text-4xl lg:text-6xl">
          Por que escolher OC residência - Oncologia clínica?
        </h1>

        <BaseSwiper
          className="md:hidden"
          data={reasonsMock}
          renderItem={(item) => (
            <ReasonsCard
              key={item.id}
              icon={item.icon}
              description={item.description}
              alt={item.alt}
            />
          )}
        />

        <div className="hidden flex-col md:flex lg:grid lg:grid-cols-3 lg:gap-7">
          {reasonsMock.map((item) => (
            <ReasonsCard
              key={item.id}
              icon={item.icon}
              description={item.description}
              alt={item.alt}
            />
          ))}
        </div>
        <div className="mb-10 flex flex-col gap-4 md:mb-16 md:flex-row lg:mb-20 lg:mt-8">
          <BaseButton
            className={`text-white md:w-[341px] ${deviceType !== "desktop" ? "bg-primary" : "bg-darkGray"}`}
          >
            Inscrições encerradas
          </BaseButton>
          <BaseButton className="border border-primary bg-white text-primary md:w-[341px]">
            Ler edital completo
          </BaseButton>
        </div>
      </div>

      <ResidenceFullBanner src="/assets/images/residencia/image (4).png" />

      <h1 className="mb-3 text-2xl text-primary md:mb-4 md:text-title-lg lg:mb-2">
        Para mais informações, envie e-mail para:
      </h1>
      <p className="mb-16 text-lg text-darkGray md:text-2xl">
        coordenacao.posgraduacao@instituto-oncoclinicas.org.br
      </p>
    </PageLayout>
  );
}
