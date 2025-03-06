import BaseButton from "@/components/Button";
import { useDeviceType } from "@/hooks/useDeviceType";
import Image from "next/image";

interface FullbleedBannerProps {
  title: string;
  src: string;
  description?: string;
  hasButton?: boolean;
  buttonText?: string;
  subDescription?: string;
}

const RightFullbleedBanner = ({
  title,
  src,
  hasButton = false,
  description,
  buttonText,
  subDescription,
}: FullbleedBannerProps): JSX.Element => {
  const deviceType = useDeviceType();
  return (
    <div className="full-bleed mb-14 flex flex-col-reverse md:flex-row md:items-stretch lg:mt-12">
      <div className="flex h-[320px] flex-col gap-5 bg-custom-gradient-dark pb-11 pl-8 pr-4 pt-9 font-lato-regular text-white md:h-[380px] md:w-1/2 md:pl-8 md:pr-20 md:pt-8 lg:h-[508px] lg:rounded-bl-[100px] lg:pb-12 lg:pl-16 lg:pr-11 lg:pt-[71px]">
        <h1 className="mb-5 text-2xl xl:text-5xl">{title}</h1>
        {description && (
          <p className="text-sm lg:text-xl xl:text-2xl">{description}</p>
        )}
        {subDescription && deviceType !== "mobile" && (
          <p className="mt-4 text-sm lg:text-xl xl:text-2xl">
            {subDescription}
          </p>
        )}
        {hasButton && deviceType === "mobile" && (
          <BaseButton className="h-12 w-60 shrink-0 border border-white bg-transparent px-16 py-3 text-lg text-white lg:mt-8">
            {buttonText}
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
            className="size-full object-cover md:h-[380px] lg:h-[508px]"
          />
        </div>
      </div>
    </div>
  );
};

export default RightFullbleedBanner;
