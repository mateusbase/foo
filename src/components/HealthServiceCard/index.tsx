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
    <div className="flex h-auto w-auto flex-col justify-between rounded-[20px] border border-lightGray bg-white p-6">
      <div className="flex items-center">
        <div className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-primary-foreground">
          {serviceIcon}
        </div>
        <div className="ml-4">
          <h3 className="text-[26px] font-black leading-[32px] text-primary">
            {serviceTitle}
          </h3>
        </div>
      </div>

      <p className="mt-4 h-[66px] w-[312px] text-left text-[18px] font-medium leading-[22px] text-darkGray">
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
