import React from "react";

interface VaccinesCardProps {
  title: string;
  description: string;
  iconUrl?: string;
}

const VaccinesCard = ({ title, description, iconUrl }: VaccinesCardProps) => {
  return (
    <div className="mt-10 h-[300px] w-full rounded-xl border border-lightGray bg-white p-6 lg:w-[80%]">
      <div className="flex flex-col items-center">
        <div className="mb-6 flex w-full items-center gap-4">
          <div className="flex h-[61px] w-[61px] flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground">
            {iconUrl ? (
              <img
                src={iconUrl}
                alt="Icon"
                className="h-full w-full rounded-full"
              />
            ) : (
              <div className="h-full w-full rounded-full bg-primary-foreground"></div>
            )}
          </div>
          <h3 className="font-lato-thin text-xl font-bold text-primary md:text-2xl">
            {title}
          </h3>
        </div>

        <p className="md:text-md font-lato-thin text-base leading-relaxed text-darkGray">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VaccinesCard;
