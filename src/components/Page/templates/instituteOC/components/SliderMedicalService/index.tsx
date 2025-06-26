import GradientBannerGrid from "@/components/Blocks/GradientBannerGrid";
import { GradientBannerProps } from "@/components/Blocks/GradientBanner/types";
import { BannerLinkItem } from "../../types";

export default function SliderMedicalService({
  bannerLinks,
}: {
  bannerLinks: BannerLinkItem[];
}): JSX.Element {
  function convertBannerLinkToGradientBanner(
    bannerLink: BannerLinkItem,
  ): GradientBannerProps {
    return {
      subtitle: bannerLink.subTitle,
      title: bannerLink.title,
      description: bannerLink.description,
      gradientType: "gradient",
      link: {
        variant: "image",
        target: {
          external: bannerLink.link.external,
          openOnNewTab: bannerLink.link.openOnNewTab,
          url: bannerLink.link.url ?? (bannerLink.link.path || ""),
        },
      },
      media: {
        data: {
          type: "image",
          data: bannerLink.image,
        },
        side: "top",
      },
      theme: "gradient",
    };
  }

  const gradientBanners = bannerLinks.map(convertBannerLinkToGradientBanner);

  return (
    <div>
      <GradientBannerGrid banners={gradientBanners} />
    </div>
  );
}
