export interface BaseRadioProps {
  color?:
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "default";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  value: string;
}
