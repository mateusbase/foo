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
}: MenuItemProps): JSX.Element {
  const handleClick = (): void => onClick(id);

  const itemClasses = clsx(
    "flex h-[79px] cursor-pointer items-center justify-between bg-primary px-10",
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
      <span className="2xl:text-xl">{name}</span>
      <IoIosArrowDropright size={29} className="text-white" />
    </div>
  );
}
