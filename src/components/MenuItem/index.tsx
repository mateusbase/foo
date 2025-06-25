import { IoIosArrowDropright } from "react-icons/io";
import clsx from "clsx";
import { MenuItemProps } from "./types";

export default function MenuItem({
  id,
  name,
  isActive,
  isFirst,
  isLast,
  onClick,
  textSize = "text-xl",
  targetId,
}: MenuItemProps): JSX.Element {
  const handleClick = (): void => onClick(id, targetId ?? "");

  const itemClasses = clsx(
    "flex min-h-[79px] cursor-pointer items-center justify-between gap-4 bg-primary py-4 pl-10 pr-5",
    {
      "bg-primary-foreground": isActive,
      "hover:bg-primary-foreground": !isActive,
      "rounded-t-xl": isFirst,
      "rounded-b-xl": isLast,
      "border-b border-white": !isLast,
    },
  );

  return (
    <div
      className={itemClasses}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
    >
      <span className={clsx(textSize, "w-[calc(100%-2rem)] break-words")}>
        {name}
      </span>

      <div className="flex items-center justify-center">
        <IoIosArrowDropright size={29} className="text-white" />
      </div>
    </div>
  );
}
