import Image from "next/image";
import BaseButton from "../Button";

interface FullbleedBannerProps {
  title?: string;
  description?: string;
  src: string;
  hasButton?: boolean;
  buttonText?: string;
  isVideo?: boolean;
}

const FullbleedBanner = ({
  title,
  description,
  src,
  hasButton = false,
  buttonText,
  isVideo = false,
}: FullbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-14 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="lg:w-[55%]">
        <div className="size-full">
          {isVideo ? (
            <video
              src={src}
              controls
              className="size-full object-cover lg:rounded-bl-[100px]"
            >
              <track kind="captions" srcLang="en" label="English" />
            </video>
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

      <div className="flex flex-col gap-5 bg-custom-gradient-dark px-10 pb-40 pt-12 font-lato-regular text-white md:py-14 md:pl-7 md:pr-20 lg:h-auto lg:w-[45%] lg:shrink-0 lg:pb-24 lg:pl-14 lg:pr-24 lg:pt-[72px]">
        {title && (
          <h1 className="mb-8 text-5xl lg:text-xl xl:text-5xl">{title}</h1>
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
