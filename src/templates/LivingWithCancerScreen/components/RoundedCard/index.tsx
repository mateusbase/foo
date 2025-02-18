import InfoCard from "@/components/InfoCard";
import React from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

interface RoundedCardProps {
  title: string;
  description: string;
  image: string;
}

const RoundedCard: React.FC<RoundedCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <InfoCard roundedSide="left" backgroundImageUrl={image}>
      <div className="flex min-h-[300px] w-full flex-col justify-between py-6 pb-11 pt-7 md:min-h-[380px] lg:max-h-[800px] lg:min-h-[530px] lg:pb-[73.75px] lg:pt-12">
        <h3 className="font-lato-thin text-2xl text-white lg:text-xl xl:text-3xl">
          {title}
        </h3>
        <div className="mt-10 grid flex-1 grid-cols-1 gap-4 text-lg md:mt-14">
          <span className="mb-4 font-lato-bold text-sm text-white lg:text-lg xl:text-2xl">
            {description}
          </span>
        </div>
        <IoChevronForwardCircleOutline
          size={29}
          className="mt-5 shrink-0 text-white"
        />
      </div>
    </InfoCard>
  );
};

export default RoundedCard;
