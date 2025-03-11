import Image from "next/image";

interface FullbleedBannerProps {
  description?: string;
  src: string;
  isVideo?: boolean;
}

const FullbleedBanner = ({
  description,
  src,
  isVideo = false,
}: FullbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-14 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="lg:w-[45%]">
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
              alt="Imagem banner"
              width={1920}
              height={1080}
              className="size-full object-fill lg:rounded-bl-[100px]"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-custom-gradient-dark px-10 pb-10 pt-12 font-lato-regular text-white md:py-14 md:pl-7 md:pr-20 lg:h-auto lg:w-[55%] lg:shrink-0 lg:pb-24 lg:pl-14 lg:pr-24 lg:pt-[96px]">
        <p className="text-center text-4xl lg:text-left lg:text-xl xl:text-4xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FullbleedBanner;
