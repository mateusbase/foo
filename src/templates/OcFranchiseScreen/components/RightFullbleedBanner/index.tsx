import BaseButton from "@/components/Button";
import Image from "next/image";

interface FullbleedBannerProps {
  title: string;
  src: string;
  hasButton?: boolean;
  buttonText?: string;
}

const FullbleedBanner = ({
  title,
  src,
  hasButton = false,
  buttonText,
}: FullbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-14 flex flex-col-reverse md:flex-row md:items-stretch lg:mt-12">
      <div className="flex h-[173px] flex-col gap-5 bg-custom-gradient-light py-11 pl-8 pr-16 font-lato-regular text-white md:h-[228px] md:w-1/2 md:pl-8 md:pr-20 md:pt-14 lg:h-[266px] lg:rounded-bl-[100px] lg:pb-12 lg:pl-16 lg:pr-11 lg:pt-[71px]">
        <h1 className="mb-8 text-2xl lg:text-3xl xl:text-5xl">{title}</h1>
        {hasButton && (
          <BaseButton className="mt-4 rounded bg-blue-500 px-6 py-2 text-white">
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
            className="size-full object-cover md:h-[228px] lg:h-[266px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FullbleedBanner;
