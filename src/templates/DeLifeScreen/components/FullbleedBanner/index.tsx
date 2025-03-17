import Image from "next/image";

interface FullbleedBannerProps {
  title?: string;
  description?: string;
  src: string;
}

const FullbleedBanner = ({
  title,
  description,
  src,
}: FullbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-14 lg:mt-12 lg:flex lg:flex-row lg:items-stretch">
      <div className="relative aspect-video lg:w-2/5">
        <div className="size-full">
          <Image
            src={src}
            alt={title || "Banner"}
            width={1920}
            height={1080}
            className="size-full object-fill lg:rounded-bl-[100px] lg:object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-custom-gradient-dark px-7 pb-14 pt-12 font-lato-regular text-white md:py-14 md:pl-7 md:pr-20 lg:h-auto lg:w-3/5 lg:shrink-0 lg:pb-24 lg:pl-14 lg:pr-24 lg:pt-[72px]">
        {title && (
          <h1 className="mb-8 text-4xl lg:text-xl xl:text-5xl">{title}</h1>
        )}
        <p className="text-xl lg:text-base xl:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default FullbleedBanner;
