import { Button } from "@/components/Button";
import Image from "next/image";

interface FullbleedBannerProps {
  title: string;
  src: string;
  description?: string;
  hasButton?: boolean;
  buttonText?: string;
}

const RightFullBleedBanner = ({
  title,
  src,
  hasButton = false,
  description,
  buttonText,
}: FullbleedBannerProps): JSX.Element => {
  return (
    <div className="full-bleed mb-14 flex flex-col-reverse md:flex-row md:items-stretch">
      <div className="flex h-[173px] max-w-4xl flex-col gap-5 bg-custom-gradient-dark pl-8 pr-16 font-lato-regular text-white md:h-[228px] md:w-1/2 md:items-center md:justify-center md:pl-8 md:pr-20 lg:h-[266px] lg:rounded-bl-[100px] lg:pl-16 lg:pr-11">
        <h1 className="my-8 max-w-lg text-2xl lg:text-3xl xl:text-5xl">
          {title}
        </h1>

        {description && <p className="text-lg lg:text-xl">{description}</p>}

        {hasButton && (
          <Button className="mt-4 rounded bg-blue-500 px-6 py-2 text-white">
            {buttonText}
          </Button>
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

export default RightFullBleedBanner;
