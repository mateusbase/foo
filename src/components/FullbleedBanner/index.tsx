import Image from "next/image";
import { useState } from "react";
import BaseButton from "../Button";

interface FullbleedBannerProps {
  title?: string;
  description?: string;
  src: string;
  hasButton?: boolean;
  buttonText?: string;
  isVideo?: boolean;
  videoPoster?: string;
}

const FullbleedBanner = ({
  title,
  description,
  src,
  hasButton = false,
  buttonText,
  isVideo = false,
  videoPoster,
}: FullbleedBannerProps): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (): void => {
    const video = document.getElementById(`video-${src}`) as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="full-bleed mb-14 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="relative aspect-video lg:w-[55%]">
        <div className="size-full">
          {isVideo ? (
            <>
              <video
                id={`video-${src}`}
                src={src}
                poster={videoPoster}
                className="size-full object-cover lg:rounded-bl-[100px]"
              >
                <track kind="captions" />
              </video>

              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  type="button"
                  aria-label="Play video"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                >
                  <Image
                    width={89}
                    height={89}
                    alt="Botão de play"
                    src="/assets/images/telemedicina/Group 618.png"
                    className="size-20"
                  />
                </button>
              )}
            </>
          ) : (
            <Image
              src={src}
              alt={title || "Banner"}
              width={1920}
              height={1080}
              className="size-full object-fill lg:rounded-bl-[100px]"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-custom-gradient-dark px-10 pb-14 pt-12 font-lato-regular text-white md:py-14 md:pl-7 md:pr-20 lg:h-auto lg:w-[45%] lg:shrink-0 lg:pb-24 lg:pl-14 lg:pr-24 lg:pt-[72px]">
        {title && (
          <h1 className="mb-8 text-4xl lg:text-xl xl:text-5xl">{title}</h1>
        )}
        <p className="text-xl lg:text-base xl:text-xl">{description}</p>
        {hasButton && (
          <BaseButton className="mt-4 rounded bg-blue-500 px-6 py-2 text-white">
            {buttonText}
          </BaseButton>
        )}
      </div>
    </div>
  );
};

export default FullbleedBanner;
