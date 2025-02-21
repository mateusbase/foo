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
      <div className="flex min-h-[353px] flex-col justify-between p-6 px-8 md:min-h-[380px] lg:min-h-[530px]">
        <div className="mt-10 grid flex-1 grid-cols-1 gap-4 text-2xl md:mt-14">
          <span className="md:text-2x1 mb-4 font-lato-light text-2xl text-white lg:text-3xl">
            {description}
          </span>
        </div>
      </div>
    </InfoCard>
  );
};

export default OCAboutLivingCardRounded;
