import { IoIosArrowDropright } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  serviceTitle,
  serviceDescription,
  serviceIcon = <RiMentalHealthLine size={30} color="white" />,
  showButton = true,
}: ServiceCardProps): JSX.Element {
  return (
    <div className="flex min-h-[253px] w-full grow flex-col rounded-[20px] border border-lightGray bg-white px-3 py-5 md:min-h-[330px] lg:h-[272px] lg:justify-between lg:p-6">
      <div className="flex flex-col items-start lg:flex-row lg:items-center">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary-foreground lg:size-[63px]">
          {serviceIcon}
        </div>

        <div>
          <h3 className="align-middle text-sm leading-4 text-primary sm:mt-0 sm:leading-[32px] md:font-normal lg:ml-4 lg:text-sm xl:text-[22px]">
            {serviceTitle}
          </h3>
        </div>
      </div>

      <p className="text-left text-[13px] leading-[15px] text-darkGray sm:leading-[18px] md:font-medium lg:mt-2 2xl:text-[16px]">
        {serviceDescription}
      </p>

      {showButton && (
        <div className="hidden items-center justify-start rounded-full lg:flex">
          <IoIosArrowDropright size={29} className="text-primary-foreground" />
        </div>
      )}
    </div>
  );
}
