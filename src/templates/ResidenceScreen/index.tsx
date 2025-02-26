import PageLayout from "@/components/PageLayout";
import { useDeviceType } from "@/hooks/useDeviceType";
import { Image } from "@heroui/react";
import SpecialistCard from "./SpecialistCards";

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
        <Image src={getBanner()} alt="Banner OC Residência" />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="mt-10 flex flex-col lg:w-1/2">
          <h1 className="mb-4 text-2xl text-primary md:w-4/5 md:text-3xl">
            A porta de entrada para se tornar um dos nosso especialistas
            renomados está aberta.
          </h1>
          <SpecialistCard />
        </div>
        <div className="flex justify-center md:w-full lg:w-1/2">
          <Image
            src={getSpecialtyImage()}
            className="full-bleed-md md:w-[782px] lg:mt-[89px] lg:h-[556px] lg:w-full lg:shrink-0"
          />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="mb-7 text-2xl text-primary md:mb-8 md:text-4xl lg:text-6xl">
          Por que escolher OC residência - Oncologia clínica?
        </h1>
      </div>
    </PageLayout>
  );
}
