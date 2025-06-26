import Image from "next/image";
import { FilterItemProps } from "./types";

const FilterItem = ({
  name,
  icon,
  active = false,
  onClick,
}: FilterItemProps & { onClick?: () => void }): JSX.Element => {
  const baseClass =
    "flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200";
  const activeClass = active ? "text-primary" : "hover:text-darkGray";

  return (
    <div className={`${baseClass} ${activeClass}`} onClick={onClick}>
      <Image
        alt={icon.alt}
        src={icon.url}
        width={icon.width}
        height={icon.height}
      />
      <span>{name}</span>
    </div>
  );
};

export default FilterItem;
