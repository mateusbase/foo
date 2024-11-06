import React from "react";

interface VaccinesCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const VaccinesCard = ({ title, description, icon }: VaccinesCardProps) => {
  return (
    <div className="flex h-full min-h-[280px] w-full flex-col rounded-xl border border-slate-300 bg-white p-6">
      <div className="flex items-center gap-4">
        <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground">
          {icon}
        </div>

        <h3 className="line-clamp-2 text-xl font-bold text-primary md:text-2xl">
          {title}
        </h3>
      </div>

      <p className="mt-4 line-clamp-4 text-base text-gray-600 md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default VaccinesCard;
