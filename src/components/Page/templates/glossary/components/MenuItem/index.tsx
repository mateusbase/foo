import { IoIosArrowDropright } from "react-icons/io";
import clsx from "clsx";
import { MenuItemGlossaryProps } from "./types";

export default function MenuItemGlossary({
  id,
  name,
  isActive,
  isFirst,
  isLast,
  onClick,
  textSize = "text-xl",
  targetId,
}: MenuItemGlossaryProps): JSX.Element {
  const handleClick = (): void => onClick(id, targetId);

  const itemClasses = clsx(
    "flex h-[79px] cursor-pointer items-center justify-between bg-primary pl-10 pr-5",
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
      <span className={textSize}>{name}</span>

      <IoIosArrowDropright size={29} className="min-w-8 text-white" />
    </div>
  );
}
