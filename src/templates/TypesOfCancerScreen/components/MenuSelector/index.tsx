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
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7">
      {options.map((option) => (
        <div
          key={option.id}
          className={clsx(
            "flex size-full flex-col items-center rounded-3xl border-1 border-darkGray transition-colors md:size-[195px] md:justify-center md:gap-5 md:px-4",
            {
              "border-darkGray bg-secondary text-white": activeId === option.id,
              "bg-white text-darkGray hover:bg-secondary-foreground hover:text-white":
                activeId !== option.id,
            },
          )}
          onClick={() => handleClick(option.id)}
        >
          {option.icon}
          <p className="text-base lg:text-2xl">{option.label}</p>
        </div>
      ))}
    </div>
  );
}
