import React from "react";

interface VaccinesCardProps {
  title: string;
  description: string;
  iconUrl?: string;
}

const VaccinesCard = ({ title, description, iconUrl }: VaccinesCardProps) => {
  return (
    <div className="flex h-full min-h-[280px] w-full flex-col rounded-xl border border-slate-300 bg-white p-6">
      <div className="flex items-center gap-4">
        {iconUrl ? (
          <img
            src={iconUrl}
            alt="Icon"
            className="flex h-[61px] w-[57px] flex-shrink-0 items-center justify-center rounded-full"
          />
        ) : (
          <div className="flex h-[61px] w-[57px] flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground"></div>
        )}

        <h3 className="flex-1 text-xl font-bold text-primary md:text-2xl">
          {title}
        </h3>
      </div>

      <div className="mt-4 flex-1 text-base text-gray-600 md:text-lg">
        {description}
      </div>
    </div>
  );
};

export default VaccinesCard;
