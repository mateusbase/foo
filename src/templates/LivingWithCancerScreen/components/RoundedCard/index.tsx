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
    <div className="flex w-auto flex-col overflow-hidden rounded-bl-[40px] bg-white">
      <div
        className="h-[376px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />

      <div className="flex min-h-[280px] flex-1 flex-col justify-between gap-5 bg-custom-gradient-dark-145deg pl-7 pr-10 pt-7 md:min-h-[314px] lg:min-h-[465px] lg:gap-9 lg:bg-custom-gradient-dark lg:px-11 lg:pt-12">
        <h3 className="font-lato-thin text-2xl text-white lg:text-xl xl:text-3xl">
          {title}
        </h3>
        <div className="grid grid-cols-1 text-lg">
          <span className="mb-4 font-lato-bold text-sm text-white lg:text-lg xl:text-2xl">
            {description}
          </span>
        </div>
        <IoChevronForwardCircleOutline
          size={29}
          className="mb-9 shrink-0 text-white md:mb-16 lg:mb-[73px]"
        />
      </div>
    </div>
  );
};

export default RoundedCard;
