export interface BaseSelectProps {
  size?: "sm" | "md" | "lg";
  className?: string;

  options: { value: string; label: string }[];

  onChange?: (value: string) => void;

  value?: string;
  defaultValue?: string;

  startContent?: React.ReactNode;

  placeholder?: string;

  disabled?: boolean;
}
