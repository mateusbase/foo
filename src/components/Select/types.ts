export interface BaseSelectProps {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
  variant?: "bordered" | "flat" | "faded" | "underlined";
  label?: string;
  labelColor?: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  options: { key: string | number; value: string | number; label: string }[];
  onChange?: (value: string | number) => void;
  width?: string;
  borderStyle?: string;
  selectedKey?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  labelPlacement?: "inside" | "outside" | "outside-left";
  defaultSelectedKey?: string | number;
  noBorder?: boolean;
  classNames?: {
    trigger?: string;
    label?: string;
    value?: string;
  };
  placeholder?: string;
}
