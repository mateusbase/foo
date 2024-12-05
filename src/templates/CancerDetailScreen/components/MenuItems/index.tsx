import MenuItem from "@/components/MenuItem";
import { menuItems } from "../../helper";

export const MenuList = ({
  items,
  activeItem,
  onItemClick,
}: {
  items: typeof menuItems;
  activeItem: number;
  onItemClick: (id: number) => void;
}): JSX.Element => (
  <div className="max-w-96 text-white">
    {items.map((item, index) => (
      <MenuItem
        key={item.id}
        id={item.id}
        name={item.name}
        isActive={activeItem === item.id}
        isFirst={index === 0}
        isLast={index === items.length - 1}
        onClick={onItemClick}
      />
    ))}
  </div>
);
