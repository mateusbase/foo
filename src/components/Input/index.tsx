import { Input } from "@heroui/react";
import React from "react";
import { BaseInputProps } from "./types";

export default function BaseInput({
  color = "default",
  label,
  placeholder = "Digite aqui",
  placeholderColor = "darkGray",
  size = "lg",
  radius = "full",
  variant = "bordered",
  className = "w-full",
  value,
  onChange,
  endContent,
  startContent,
  onBlur,
  register,
  error,
  name,
  maxLength,
  backgroundColor,
  borderColor,
  classNames = {},
}: BaseInputProps): JSX.Element {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 ml-5 block text-left text-base font-bold text-lightGray">
          {label}
        </label>
      )}
      <Input
        classNames={{
          input: `text-${color} placeholder:text-${placeholderColor} bg-${backgroundColor}`,
          inputWrapper: `border-1 ${borderColor ? `border-${borderColor}` : `border-${color}`} ${backgroundColor ? `bg-${backgroundColor}` : ""}`,
          ...(classNames || {}),
        }}
        placeholder={placeholder}
        size={size}
        radius={radius}
        variant={variant}
        className={`${className}`}
        value={value}
        color={color}
        endContent={endContent}
        startContent={startContent}
        maxLength={maxLength}
        {...(register && name
          ? {
              ...register(name),
              onChange: (e) => {
                register(name).onChange(e);
                onChange?.(e);
              },
              onBlur: (e) => {
                register(name).onBlur(e);
                onBlur?.();
              },
            }
          : {
              onChange: (e) => {
                onChange?.(e);
              },
              onBlur: () => {
                onBlur?.();
              },
            })}
      />
      {error && (
        <p className="ml-5 mt-2 text-sm text-danger">
          {typeof error === "string" ? error : error.message}
        </p>
      )}
    </div>
  );
}
