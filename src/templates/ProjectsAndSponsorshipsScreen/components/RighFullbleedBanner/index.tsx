import BaseButton from "@/components/Button";
import Image from "next/image";

interface FullbleedBannerProps {
  title: string;
  src: string;
  description?: string;
  hasButton?: boolean;
}

const RightFullbleedBanner = ({
  title,
  src,
  hasButton = false,
  description,
}: FullbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-14 flex flex-col-reverse md:flex-row md:items-stretch lg:mt-12">
      <div className="flex h-[285px] flex-col gap-5 bg-custom-gradient-dark py-11 pl-8 pr-16 font-lato-regular text-white md:w-1/2 md:pl-8 md:pr-20 md:pt-8 lg:h-[418px] lg:rounded-bl-[100px] lg:pb-12 lg:pl-16 lg:pr-11 lg:pt-[71px]">
        <h1 className="text-2xl lg:text-2xl xl:text-5xl">{title}</h1>
        {description && (
          <p className="text-sm lg:mt-8 lg:text-xl">{description}</p>
        )}
        {hasButton && (
          <BaseButton className="h-12 w-60 border border-white bg-transparent px-16 py-3 text-lg text-white lg:mt-8">
            Saiba mais
          </BaseButton>
        )}
      </div>

      <div className="md:w-1/2">
        <div className="size-full">
          <Image
            src={src}
            alt={title}
            width={1920}
            height={1080}
            className="size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RightFullbleedBanner;
