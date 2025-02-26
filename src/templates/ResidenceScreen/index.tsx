import PageLayout from "@/components/PageLayout";
import { useDeviceType } from "@/hooks/useDeviceType";
import { Image } from "@heroui/react";

export default function ResidenceScreen(): JSX.Element {
  const deviceType = useDeviceType();
  const smallBanner = "/assets/images/residencia/Mask group.png";
  const mediumBanner = "/assets/images/residencia/Group 633 (1).png";
  const largeBanner = "/assets/images/residencia/Group 633 (2).png";

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
  return (
    <PageLayout title="Instituto Oncoclínicas" subtitle="Residência 2025">
      <div className="mt-10 flex items-center justify-center">
        <Image src={getBanner()} alt="Banner OC Residência" />
      </div>
    </PageLayout>
  );
}
