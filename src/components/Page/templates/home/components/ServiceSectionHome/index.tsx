import BaseSwiper from "@/components/BaseSwiper";
import { useDeviceType } from "@/hooks/useDeviceType";
import ServiceCard from "../ServiceCard";
import { Discover } from "../../types";

export default function ServicesSectionHome({
  links,
  title,
  description,
}: Discover): JSX.Element {
  const deviceType = useDeviceType();

  const getAnchorFromName = (name: string): string => {
    switch (name) {
      case "Tratamentos":
        return "tratamentos";
      case "Diagnósticos":
        return "diagnósticos";
      case "Serviços":
        return "servicos";
      default:
        return "";
    }
  };

  const mappedData = links.map((item, index) => {
    const isExternal = item.link.external;
    const anchor = getAnchorFromName(item.name);

    let href: string;

    if (isExternal) {
      if (!item.link.url) throw new Error("Missing URL for external link");
      href = item.link.url;
    } else {
      if (!item.link.path) throw new Error("Missing path for internal link");
      href = anchor ? `${item.link.path}#${anchor}` : item.link.path;
    }

    return {
      id: index + 1,
      title: item.name,
      path: href,
      isExternal,
      openOnNewTab: item.link.openOnNewTab,
      icon: (
        <img
          key={item.icon.alt}
          src={item.icon.url}
          alt={item.icon.alt}
          width={item.icon.width}
          height={item.icon.height}
        />
      ),
    };
  });

  return (
    <div className="w-full justify-center gap-20 pb-6 pt-12 lg:flex lg:flex-row">
      <div className="flex w-full flex-col justify-center">
        <div className="text-left">
          <h2 className="mb-4 block text-xl text-primary lg:mb-0 lg:text-5xl">
            {title}
          </h2>

          <p className="mt-4 hidden text-xl text-gray-600 lg:block">
            {description}
          </p>
        </div>
      </div>

      <BaseSwiper
        data={mappedData}
        hasArrows={deviceType !== "tablet"}
        renderItem={(item) => <ServiceCard {...item} />}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
        }}
        className="lg:w-3/5"
      />
    </div>
  );
}
