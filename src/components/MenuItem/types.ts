export interface MenuItemProps {
  id: string;
  name: string;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
  onClick: (id: string, targetId: string) => void;
  textSize?: string;
  targetId?: string;
}
