export interface MenuItemProps {
  id: number;
  name: string;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
  onClick: (id: number) => void;
  textSize?: string;
}
