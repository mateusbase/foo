import React from "react";
import { RichText } from "@/components/Blocks/RichText";
import { VaccinationRoundedCardProps } from "./types";
import InfoCard from "../InfoCard";

const VaccinationRoundedCard = ({
  title,
  description,
  listItems,
  imageUrl,
}: VaccinationRoundedCardProps): JSX.Element => {
  return (
    <InfoCard roundedSide="left" customPadding={4} imageUrl={imageUrl}>
      <div className="flex min-h-[300px] flex-col justify-between p-6 px-8 md:min-h-[380px] lg:p-6">
        <h3 className="font-lato-thin text-3xl text-white lg:text-5xl">
          {title}
        </h3>

        <div className="mt-10 grid flex-1 grid-cols-1 gap-4 text-lg md:mt-14">
          {description ? (
            <RichText
              content={description}
              className="text-left font-lato-bold text-base md:text-lg lg:text-2xl [&_li]:text-white [&_p.editor-paragraph]:whitespace-normal [&_p.editor-paragraph]:break-words [&_p.editor-paragraph]:text-white [&_ul]:text-white"
            />
          ) : (
            <ul className="mb-4 list-outside list-disc text-base text-white md:text-lg lg:text-2xl">
              {listItems?.map((item) => (
                <li className="ml-4 font-lato-bold text-white" key={item}>
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
