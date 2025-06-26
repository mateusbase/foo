export interface MenuOption {
  id: string;
  label: string;
  icon: JSX.Element;
}

export interface MenuSelectorProps {
  options: MenuOption[];
  onClick?: (id: string) => void;
}
