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
    <div className="flex h-[231px] w-full flex-col rounded-[20px] border border-lightGray bg-white px-4 py-8 lg:justify-between lg:p-6">
      <div className="flex flex-col items-start lg:flex-row">
        <div className="flex size-11 items-center justify-center rounded-full bg-primary-foreground lg:size-[63px]">
          {serviceIcon}
        </div>

        <div>
          <h3 className="text-sm leading-4 text-primary sm:mt-0 sm:leading-[32px] md:font-normal lg:ml-4 lg:text-[22px]">
            {serviceTitle}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-left text-sm leading-[15px] text-darkGray sm:leading-[14px] md:font-medium lg:text-[16px]">
        {serviceDescription}
      </p>

      {showButton && (
        <div className="mt-10 hidden items-center justify-start rounded-full lg:flex">
          <IoIosArrowDropright size={29} className="text-primary-foreground" />
        </div>
      )}
    </div>
  );
}
