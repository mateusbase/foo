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
  radius?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  options: { key: string | number; value: string | number; label: string }[];
  onChange?: (value: string | number) => void;
  width?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  labelPlacement?: "inside" | "outside" | "outside-left";
  defaultSelectedKey?: string | number;
}
