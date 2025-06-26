import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import GradientBanner from "@/components/Blocks/GradientBanner";
import { VideoCardSectionProps } from "./types";

const VideoCardSection = ({
  title,
  subtitle,
  buttonText,
  videos,
}: VideoCardSectionProps): JSX.Element => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [itemsPerClick, setItemsPerClick] = useState(1);

  useEffect(() => {
    const getVisibleCount = (): number => {
      if (window.innerWidth >= 1025) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };

    const updateItemsPerClick = (): void => {
      const count = getVisibleCount();
      setVisibleCount(count);
      setItemsPerClick(count);
    };

    updateItemsPerClick();
    window.addEventListener("resize", updateItemsPerClick);
    return () => window.removeEventListener("resize", updateItemsPerClick);
  }, []);

  const handleShowMore = (): void => {
    setVisibleCount((prev) => Math.min(prev + itemsPerClick, videos.length));
  };

  return (
    <section className="mb-16">
      <h1 className="mb-3 text-left text-2xl text-primary lg:text-4xl">
        {title}
      </h1>

      {subtitle && <p className="mb-5 text-darkGray lg:text-2xl">{subtitle}</p>}

      <div className="grid grid-cols-1 gap-6 md:hidden lg:grid lg:grid-cols-3">
        {videos
          .slice(0, visibleCount)
          .map(({ name, path, video, description }) => (
            <GradientBanner
              title={name}
              description={description}
              media={{
                data: {
                  type: video.type,
                  data: {
                    url: video.data.url,
                    alt: name,
                    key: `video-${name}`,
                  },
                },
                side: "top",
              }}
              link={{
                variant: "chevron-right-button",
                target: {
                  external: false,
                  url: path,
                  openOnNewTab: false,
                },
              }}
              roundCorner="bottom-left"
              theme="gradient"
            />
          ))}
      </div>

      {visibleCount < videos.length && (
        <div className="mt-4 flex justify-center">
          <Button
            onClick={handleShowMore}
            className="mt-4 w-full text-white md:mx-auto md:w-[356px]"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </section>
  );
};

export default VideoCardSection;
