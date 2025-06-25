import Image from "next/image";
import ArrowCicleOutlineIcon from "@/components/Icons/ArrowCicleOutline";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  serviceTitle,
  serviceDescription,
  serviceIcon,
  showButton,
}: ServiceCardProps): JSX.Element {
  return (
    <div className="flex h-[300px] flex-col justify-between gap-5 rounded-[20px] border border-lightGray bg-white px-4 py-8 md:px-6 lg:px-10">
      <div className="flex flex-col items-start lg:flex-row lg:items-center">
        <div className="flex items-center justify-center rounded-full">
          <Image
            src={serviceIcon}
            alt={serviceTitle}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>

        <div className="max-w-48">
          <h3 className="mt-5 align-middle text-sm leading-tight text-primary sm:mt-0 sm:leading-snug md:font-normal lg:ml-4 lg:text-sm xl:text-2xl xl:leading-[32px]">
            {serviceTitle}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <span className="line-clamp-4 max-w-[300px] text-left text-sm leading-[15px] text-darkGray sm:leading-[18px] md:font-medium 2xl:text-base">
          {serviceDescription}
        </span>
      </div>

      {showButton && (
        <div className="self-start">
          <ArrowCicleOutlineIcon className="size-5 -rotate-90 lg:size-7" />
        </div>
      )}
    </div>
  );
}
