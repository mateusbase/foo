import clsx from "clsx";
import { useState } from "react";
import { MenuSelectorProps } from "./types";

export default function MenuSelector({
  options,
  onClick,
}: MenuSelectorProps): JSX.Element {
  const [activeId, setActiveId] = useState<number | null>(1);

  const handleClick = (id: number): void => {
    setActiveId(id);
    if (onClick) onClick(id);
  };

  return (
    <div className="flex cursor-pointer flex-col gap-4 md:flex-row">
      {options.map((option) => (
        <div
          key={option.id}
          className={clsx(
            "border-1 flex h-20 w-full items-center gap-5 rounded-3xl border border-primary-foreground px-6 transition-colors md:h-24 md:justify-center lg:h-32",
            {
              "border-primary bg-primary text-white": activeId === option.id,
              "bg-white text-darkGray hover:bg-primary hover:text-white":
                activeId !== option.id,
            },
          )}
          onClick={() => handleClick(option.id)}
        >
          {option.icon}
          <span className="text-base lg:text-2xl">{option.label}</span>
        </div>
      ))}
    </div>
  );
}
