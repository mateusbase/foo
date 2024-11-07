import InfoCard from "@/components/InfoCard";
import React from "react";

interface VaccinationRoundedCardProps {
  title: string;
  description?: string;
  listItems?: string[];
}

const VaccinationRoundedCard = ({
  title,
  description,
  listItems,
}: VaccinationRoundedCardProps) => {
  return (
    <div className="mb-10 flex h-full w-full flex-col justify-between">
      <InfoCard roundedSide="right">
        <div className="flex h-full flex-col justify-between p-4 lg:max-h-[400px] lg:min-h-[400px] lg:p-6">
          <h3 className="font-lato-thin text-3xl text-white lg:text-5xl">
            {title}
          </h3>
          <div className="mt-8 grid flex-1 grid-cols-1 gap-4 gap-x-20 text-lg">
            {description ? (
              <span className="font-lato-bold text-xl text-white md:text-2xl">
                {description}
              </span>
            ) : (
              <ul className="list-inside list-disc text-xl text-white md:text-2xl">
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
    </div>
  );
};

export default VaccinationRoundedCard;
