import { IoIosArrowDropright } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";
import Link from "next/link";
import { HealthServiceCardProps } from "./types";

export default function HealthServiceCard({
  serviceTitle,
  serviceDescription,
  serviceIcon = <RiMentalHealthLine size={34} color="white" />,
  showButton = false,
}: HealthServiceCardProps): JSX.Element {
  return (
    <Link href={`/tudo-sobre-o-cancer/${serviceTitle}`}>
      <div className="mx-auto flex h-auto min-h-[236px] w-[320px] flex-col gap-4 rounded-[20px] border border-darkGray bg-white px-4 py-9 lg:justify-between lg:p-6">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-4 flex size-16 min-w-16 items-center justify-center rounded-full bg-primary lg:size-[63px]">
            {serviceIcon}
          </div>

          <div>
            <h3 className="text-2xl leading-4 text-primary sm:mt-0 sm:leading-[32px] md:font-normal lg:ml-4 lg:text-[22px]">
              {serviceTitle}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-center text-lg leading-[22px] text-darkGray sm:leading-[24px] md:font-medium lg:text-[16px]">
          {serviceDescription}
        </p>

        {showButton && (
          <div className="mt-8 items-center justify-start rounded-full">
            <IoIosArrowDropright
              size={29}
              className="text-primary-foreground"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
