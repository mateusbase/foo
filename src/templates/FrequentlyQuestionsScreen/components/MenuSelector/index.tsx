import clsx from "clsx";
import { useState } from "react";
import { MenuSelectorProps } from "./types";

export default function MenuSelector({
  options,
  onClick,
}: MenuSelectorProps): JSX.Element {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (id: number): void => {
    setActiveId(id);
    if (onClick) onClick(id);
  };

  return (
    <div className="flex h-32 cursor-pointer flex-row gap-4">
      {options.map((option) => (
        <div
          key={option.id}
          className={clsx(
            "flex w-full items-center justify-center rounded-3xl border-1 border-primary-foreground transition-colors",
            {
              "border-primary bg-primary text-white": activeId === option.id,
              "bg-white text-darkGray hover:bg-primary hover:text-white":
                activeId !== option.id,
            },
          )}
          onClick={() => handleClick(option.id)}
        >
          {option.icon}
          <p className="text-2xl">{option.label}</p>
        </div>
      ))}
    </div>
  );
}
