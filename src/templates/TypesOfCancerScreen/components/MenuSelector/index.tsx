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
    <div
      className={clsx(
        "mx-auto grid w-full grid-cols-2 justify-items-center gap-4 align-middle md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7",
        {
          "md:flex md:flex-wrap md:justify-center lg:grid lg:justify-items-start":
            options.length % 3 === 1,
        },
      )}
    >
      {options.map((option) => (
        <div
          key={option.id}
          className={clsx(
            "flex size-36 flex-col items-center rounded-[20px] border-1 border-darkGray px-8 py-3 transition-colors md:size-[205px] md:justify-center md:gap-5 md:px-4 lg:size-[160px]",
            {
              "border-darkGray bg-secondary text-white": activeId === option.id,
              "bg-white text-darkGray hover:bg-secondary-foreground hover:text-white":
                activeId !== option.id,
            },
          )}
          onClick={() => handleClick(option.id)}
        >
          {option.icon}
          <p className="mt-3 text-nowrap text-sm lg:text-2xl">{option.label}</p>
        </div>
      ))}
    </div>
  );
}
