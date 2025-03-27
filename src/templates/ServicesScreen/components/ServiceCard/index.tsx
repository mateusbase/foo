import { RiMentalHealthLine } from "react-icons/ri";
import { GradientRightChevronIcon } from "@/components/Icons";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  serviceTitle,
  serviceDescription,
  serviceIcon = <RiMentalHealthLine size={30} color="white" />,
  showButton = false,
  className = "",
}: ServiceCardProps): JSX.Element {
  return (
    <div
      className={`flex w-full flex-col rounded-[20px] border border-lightGray bg-white py-7 pl-4 pr-7 lg:p-6 ${className} `}
    >
      <div className="flex flex-col items-start lg:flex-row lg:items-center">
        <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary-foreground lg:size-[63px]">
          {serviceIcon}
        </div>

        <h3 className="mb-2 align-middle text-sm leading-4 text-primary sm:leading-[32px] md:font-normal lg:ml-4 lg:text-sm xl:text-[22px]">
          {serviceTitle}
        </h3>
      </div>

      <p className="text-left text-[13px] leading-[15px] text-darkGray sm:leading-[18px] md:font-medium lg:mb-6 lg:mt-2 2xl:text-base">
        {serviceDescription}
      </p>

      {showButton && (
        <div className="mt-3 flex items-center justify-start rounded-full">
          <GradientRightChevronIcon
            size={0.8}
            className="text-primary-foreground"
          />
        </div>
      )}
    </div>
  );
}
