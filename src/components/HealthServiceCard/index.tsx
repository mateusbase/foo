import { IoIosArrowDropright } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";

interface HealthServiceCardProps {
  serviceTitle: string;
  serviceDescription: string;
  serviceIcon?: JSX.Element;
  showButton?: boolean;
}

export default function HealthServiceCard({
  serviceTitle,
  serviceDescription,
  serviceIcon = <RiMentalHealthLine size={34} color="white" />,
  showButton = true,
}: HealthServiceCardProps): JSX.Element {
  return (
    <div className="flex h-auto min-h-[280px] w-full flex-col justify-between rounded-[20px] border border-lightGray bg-white p-6">
      <div className="flex flex-col items-start sm:flex-row md:items-center">
        <div className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-primary-foreground">
          {serviceIcon}
        </div>

        <h3 className="mt-2 text-[22px] font-black leading-[28px] text-primary sm:ml-4 sm:mt-0 sm:text-[26px] sm:leading-[32px]">
          {serviceTitle}
        </h3>
      </div>

      <p className="mt-4 text-left text-[16px] font-medium leading-[22px] text-darkGray sm:text-[18px] sm:leading-[24px]">
        {serviceDescription}
      </p>

      {showButton && (
        <div className="mt-10 flex items-center justify-start rounded-full">
          <IoIosArrowDropright size={29} className="text-primary-foreground" />
        </div>
      )}
    </div>
  );
}
