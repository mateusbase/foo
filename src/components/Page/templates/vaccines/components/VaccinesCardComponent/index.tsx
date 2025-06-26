import React from "react";
import { VaccinesCardProps } from "./type";

const VaccinesCard = ({
  title,
  description,
  iconUrl,
}: VaccinesCardProps): JSX.Element => {
  return (
    <div className="flex min-h-[337px] flex-col rounded-xl border border-lightGray bg-white px-9 pb-10 pt-7 md:min-h-[227px] lg:h-full lg:min-h-[300px]">
      <div className="flex flex-1 flex-col">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex size-[61px] shrink-0 items-center justify-center">
            {iconUrl ? (
              <img src={iconUrl} alt="Icon" className="size-full" />
            ) : (
              <div className="size-full rounded-full bg-primary-foreground" />
            )}
          </div>

          <h3 className="font-lato-thin text-xl text-primary md:text-2xl">
            {title}
          </h3>
        </div>

        <p className="text-left font-lato-thin text-base leading-relaxed text-darkGray md:text-base lg:flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VaccinesCard;
