import InfoCard from "@/components/InfoCard";
import React from "react";
import { VaccinationRoundedCardProps } from "./types";

const VaccinationRoundedCard = ({
  title,
  description,
  listItems,
}: VaccinationRoundedCardProps): JSX.Element => {
  return (
    <InfoCard roundedSide="left" customPadding={4}>
      <div className="flex min-h-[300px] flex-col justify-between p-6 px-8 md:min-h-[380px] lg:min-h-[530px] lg:p-6">
        <h3 className="font-lato-thin text-3xl text-white lg:text-5xl">
          {title}
        </h3>
        <div className="mt-10 grid flex-1 grid-cols-1 gap-4 text-lg md:mt-14">
          {description ? (
            <span className="mb-4 font-lato-bold text-base text-white md:text-lg lg:text-2xl">
              {description}
            </span>
          ) : (
            <ul className="mb-4 list-inside list-disc text-base text-white md:text-lg lg:text-2xl">
              {listItems?.map((item) => (
                <li className="font-lato-bold" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </InfoCard>
  );
};

export default VaccinationRoundedCard;
