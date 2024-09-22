/* eslint-disable prettier/prettier */
import { IoIosArrowDropright } from "react-icons/io";
import { MenuItemProps } from "./types";

export default function MenuItem({
  id,
  name,
  isActive,
  isFirst,
  isLast,
  onClick,
}: MenuItemProps): JSX.Element {
  return (
    <div
      className={`flex h-[79px] cursor-pointer items-center justify-between bg-primary px-10 ${isActive ? "bg-primary-foreground" : "hover:bg-primary-foreground"
        } ${isFirst ? "rounded-tl-xl rounded-tr-xl" : ""} ${isLast ? "rounded-bl-xl rounded-br-xl" : "border-b border-white"
        }`}
      onClick={() => onClick(id)}
    >
      <span className="text-xl">{name}</span>
      <IoIosArrowDropright size={29} className="text-white" />
    </div>
  );
}
