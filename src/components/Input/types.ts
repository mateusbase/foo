import { FormValues } from "@/hooks/useValidation";
import { ReactNode } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface BaseInputProps {
  label?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderStyle?: string;
  onBlur?: () => void;
  defaultValue?: string;
  register?: UseFormRegister<FormValues>;
  name?: "name" | "email" | "phone";
  error?: string | FieldError;
  maxLength?: number;
  disabled?: boolean;

  endContent?: ReactNode;
}
