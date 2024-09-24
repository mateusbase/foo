export interface BaseButtonProps {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "bordered" | "ghost";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}
