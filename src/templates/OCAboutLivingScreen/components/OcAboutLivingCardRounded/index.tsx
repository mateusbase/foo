import InfoCard from "@/components/InfoCard";
import React from "react";
import { OCAboutLivingCardRoundedProps } from "./type";

const OCAboutLivingCardRounded = ({
  description,
  backgroundImageUrl,
  isBackgroundUrl,
}: OCAboutLivingCardRoundedProps): JSX.Element => {
  return (
    <InfoCard
      roundedSide="left"
      customPadding={4}
      backgroundImageUrl={backgroundImageUrl}
      isBackgroundUrl={isBackgroundUrl}
    >
      <div className="flex min-h-[250px] flex-col justify-between px-8 md:min-h-[300px] lg:min-h-[270px]">
        <div className="grid flex-1 grid-cols-1 gap-4 text-2xl">
          <span className="mb-4 font-lato-light text-xl text-white lg:text-xl xl:text-2xl">
            {description}
          </span>
        </div>
      </div>
    </InfoCard>
  );
};

export default OCAboutLivingCardRounded;
