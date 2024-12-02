export interface SortingFilterDropdownProps {
  options: Array<{ key: number | string; value: string; label: string }>;
  defaultSelectedKey?: string | number;
  onChange?: (selectedKey: string | number) => void;
  className?: string;
}
