export interface BaseInputProps {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
  label?: string;
  placeholder?: string;
  placeholderColor?: string;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  variant?: "bordered" | "flat" | "faded" | "underlined";
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  borderStyle?: string;
  onBlur?: () => void;
}
