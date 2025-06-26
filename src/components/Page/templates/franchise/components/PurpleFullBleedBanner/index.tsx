import Image from "next/image";

interface PurpleFullbleedBannerProps {
  title: string;
  src: string;
  description?: string;
}

const PurpleFullbleedBanner = ({
  title,
  src,
  description,
}: PurpleFullbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-14 flex flex-col-reverse md:flex-row-reverse md:items-stretch lg:mt-12">
      <div className="flex h-[350px] flex-col gap-2 bg-gradient-to-b from-purpleDark to-purpleLight py-11 pl-8 pr-16 font-lato-regular text-white md:h-[400px] md:w-1/2 md:pl-8 md:pr-20 md:pt-14 lg:h-[479px] lg:lg:pb-12 lg:pl-16 lg:pr-11 lg:pt-[71px]">
        <h1 className="mb-8 w-[90%] text-2xl lg:w-4/5 lg:text-3xl xl:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="w-[90%] text-sm lg:text-xl">{description}</p>
        )}
      </div>

      <div className="md:w-1/2">
        <div className="size-full">
          <Image
            src={src}
            alt={title}
            width={1920}
            height={1080}
            className="size-full object-cover md:h-[400px] lg:h-[479px] lg:rounded-bl-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PurpleFullbleedBanner;
