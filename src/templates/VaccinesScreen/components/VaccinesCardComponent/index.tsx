import React from "react";

interface VaccinesCardProps {
  title: string;
  description: string;
  iconUrl?: string;
}

const VaccinesCard = ({
  title,
  description,
  iconUrl,
}: VaccinesCardProps): JSX.Element => {
  return (
    <div className="mt-3 h-4/5 w-full rounded-xl border border-lightGray bg-white p-6 lg:w-4/5">
      <div className="flex flex-col items-center">
        <div className="mb-6 flex w-full items-center gap-4">
          <div className="flex size-[61px] shrink-0 items-center justify-center rounded-full bg-primary-foreground">
            {iconUrl ? (
              <img
                src={iconUrl}
                alt="Icon"
                className="size-full rounded-full"
              />
            ) : (
              <div className="size-full rounded-full bg-primary-foreground" />
            )}
          </div>
          <h3 className="font-lato-thin text-xl font-bold text-primary md:text-2xl">
            {title}
          </h3>
        </div>

        <p className="h-48 font-lato-thin text-base leading-relaxed text-darkGray md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VaccinesCard;
