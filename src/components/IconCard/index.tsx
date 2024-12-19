import { IoIosArrowDropright } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";
import Link from "next/link";
import { IconCardProps } from "./types";

export default function IconCard({
  cardTitle,
  cardDescription,
  cardIcon = <RiMentalHealthLine size={34} color="white" />,
  showButton = true,
}: IconCardProps): JSX.Element {
  const cardSlug = cardTitle.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/tudo-sobre-o-cancer/${cardSlug}`}>
      <div className="flex h-auto min-h-[200px] w-full flex-col rounded-[20px] border border-lightGray bg-white px-4 py-8 lg:justify-between lg:p-6">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex min-w-16 items-center justify-center rounded-full bg-primary-foreground lg:size-[63px]">
            {cardIcon}
          </div>

          <div>
            <h3 className="text-sm leading-4 text-primary sm:mt-0 sm:leading-[32px] md:font-normal lg:ml-4 lg:text-[22px]">
              {cardTitle}
            </h3>
          </div>
        </div>

        <p className="mt-4 text-left text-sm leading-[22px] text-darkGray sm:leading-[24px] md:font-medium lg:text-[16px]">
          {cardDescription}
        </p>

        {showButton && (
          <div className="mt-10 hidden items-center justify-start rounded-full lg:flex">
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
