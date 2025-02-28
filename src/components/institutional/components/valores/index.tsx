import Image from "next/image";

interface ValuesbleedBannerProps {
  title: string;
  src: string;
  description: string;
}

const ValuesFullbleedBanner = ({
  title,
  src,
  description,
}: ValuesbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-14 flex flex-col-reverse md:flex-row md:items-stretch lg:mt-12">
      <div className="flex h-[202px] flex-col gap-5 bg-custom-gradient-dark-145deg py-11 pl-8 pr-16 font-lato-regular text-white md:h-[229px] md:w-1/2 md:pl-8 md:pr-20 md:pt-14 lg:h-[343px] lg:w-[655px] lg:rounded-bl-[100px] lg:bg-custom-gradient-dark lg:pb-12 lg:pl-16 lg:pr-11 lg:pt-[71px]">
        <h1 className="-mt-5 text-2xl lg:text-3xl xl:text-5xl">{title}</h1>
        {description && <p className="text-xs lg:text-xl">{description}</p>}
      </div>

      <div className="md:w-1/2">
        <div className="size-full">
          <Image
            src={src}
            alt={title}
            width={1920}
            height={1080}
            className="size-full object-cover md:h-[229px] lg:h-[343px] lg:w-[430px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ValuesFullbleedBanner;
