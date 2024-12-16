import { IoIosArrowDropright } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";
import { ContentCardProps } from "./types";

export default function ContentCard({
  serviceTitle,
  serviceDescription,
  serviceIcon = <RiMentalHealthLine size={34} color="white" />,
  showButton = true,
}: ContentCardProps): JSX.Element {
  return (
    <div className="flex h-auto min-h-[201px] w-full flex-col justify-between rounded-[20px] border border-lightGray bg-white p-6">
      <div className="flex items-center">
        <div className="flex size-[63px] items-center justify-center rounded-full bg-purpleDark">
          {serviceIcon}
        </div>

        <h3 className="ml-4 mt-2 max-w-60 text-xl font-normal leading-[28px] text-purpleDark sm:mt-0 sm:leading-[32px] lg:text-xl xl:text-2xl">
          {serviceTitle}
        </h3>
      </div>

      <p className="mt-4 text-left text-base font-normal leading-[22px] text-darkGray sm:text-[18px] sm:leading-[24px]">
        {serviceDescription}
      </p>

      {showButton && (
        <div className="mt-10 flex items-center justify-start rounded-full">
          <IoIosArrowDropright size={29} className="text-purpleDark" />
        </div>
      )}
    </div>
  );
}
