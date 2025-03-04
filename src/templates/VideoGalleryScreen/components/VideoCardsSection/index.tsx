import { useState, useEffect } from "react";
import BaseButton from "@/components/Button";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

interface VideoCard {
  id: number;
  cardTitle: string;
  description: string;
  src: string;
}

interface VideoCardSectionProps {
  title: string;
  subtitle?: string;
  videos: VideoCard[];
}

const getInitialVisibleCount = (): number => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
  }
  return 1;
};

const VideoCardSection = ({
  title,
  subtitle,
  videos,
}: VideoCardSectionProps): JSX.Element => {
  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount);
  const [itemsPerClick, setItemsPerClick] = useState(getInitialVisibleCount);

  useEffect(() => {
    const updateItemsPerClick = (): void => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
        setItemsPerClick(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
        setItemsPerClick(2);
      } else {
        setVisibleCount(1);
        setItemsPerClick(1);
      }
    };

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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos
          .slice(0, visibleCount)
          .map(({ id, src, cardTitle, description }) => (
            <div
              key={id}
              className="rounded-bl-[40px] bg-custom-gradient-dark text-white"
            >
              <video
                src={src}
                className="block h-[193px] w-full lg:h-[306px]"
                controls
              >
                <track kind="captions" srcLang="en" label="English captions" />
              </video>
              <div className="flex h-[320px] flex-col justify-between p-4 pl-7">
                <h2 className="text-2xl xl:text-3xl">{cardTitle}</h2>
                <p className="text-sm xl:text-2xl">{description}</p>
                <IoChevronForwardCircleOutline size={29.25} className="mt-2" />
              </div>
            </div>
          ))}
      </div>

      {visibleCount < videos.length && (
        <div className="mt-4 flex justify-center">
          <BaseButton
            onClick={handleShowMore}
            className="mt-4 w-full text-white md:mx-auto md:w-[356px]"
          >
            Ver mais
          </BaseButton>
        </div>
      )}
    </section>
  );
};

export default VideoCardSection;
