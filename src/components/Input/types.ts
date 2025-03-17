import { FormValues } from "@/hooks/useValidation";
import { FieldError, UseFormRegister } from "react-hook-form";

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
  defaultValue?: string;
  register?: UseFormRegister<FormValues>;
  name?: "name" | "email" | "phone";
  error?: string | FieldError;
  maxLength?: number;
  backgroundColor?: string;
  disabled?: boolean;
  borderColor?: string;
  classNames?: {
    input?: string;
    inputWrapper?: string;
  };
}
