export interface menuOption {
  id: number;
  label: string;
  icon: JSX.Element;
}

export interface MenuSelectorProps {
  options: menuOption[];
  onClick?: (id: number) => void;
}
