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
          input: `text-${color} placeholder:text-${placeholderColor}`,
          inputWrapper: `border-${color} border-1`,
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
