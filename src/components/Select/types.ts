export interface BaseSelectProps {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
  variant?: "bordered" | "flat" | "faded" | "underlined"; // Corrigido aqui
  label?: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  options: { key: string | number; value: string | number; label: string }[];
  onChange?: (value: string | number) => void;
  width?: string;
}
