import React from "react";
import { VaccinesCardProps } from "./type";

const VaccinesCard = ({
  title,
  description,
  iconUrl,
}: VaccinesCardProps): JSX.Element => {
  return (
    <div className="mb-8 mt-3 h-[280px] w-full rounded-xl border border-lightGray bg-white p-6 lg:h-[300px]">
      <div className="flex h-full flex-col items-center">
        <div className="mb-6 flex w-full items-center gap-4">
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

        <p className="line-clamp-3 overflow-hidden text-ellipsis font-lato-thin text-base leading-relaxed text-darkGray md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VaccinesCard;
