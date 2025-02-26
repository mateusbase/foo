import BaseButton from "@/components/Button";
import Image from "next/image";

interface FullbleedBannerProps {
  src: string;
  description?: string;
  hasButton?: boolean;
  buttonText?: string;
}

const PurpleFullbleedBanner = ({
  src,
  hasButton = false,
  description,
  buttonText,
}: FullbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-10 flex flex-col-reverse md:flex-row-reverse md:items-stretch lg:mt-12 lg:flex-row">
      <div className="flex h-[243px] flex-col gap-5 bg-gradient-to-b from-purpleDark to-purpleLight px-8 pb-11 pt-9 font-lato-regular text-white md:h-[260px] md:w-1/2 md:pl-8 md:pr-20 md:pt-14 lg:h-[320px] lg:rounded-bl-[100px] lg:pb-12 lg:pl-16 lg:pr-11 lg:pt-[71px]">
        {description && (
          <p className="mb-3 text-lg xl:text-2xl">{description}</p>
        )}
        {hasButton && (
          <BaseButton className="h-12 w-60 shrink-0 border border-white bg-transparent px-16 py-3 text-lg text-white lg:mt-8 lg:w-[303px]">
            {buttonText}
          </BaseButton>
        )}
      </div>

      <div className="md:w-1/2">
        <div className="size-full">
          <Image
            src={src}
            alt="Banner"
            width={1920}
            height={1080}
            className="size-full h-[390px] object-cover md:h-[260px] lg:h-[320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PurpleFullbleedBanner;
