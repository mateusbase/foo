import { Input } from "@nextui-org/react";
import React from "react";
import { BaseInputProps } from "./types";

export default function BaseInput({
  label,
  placeholder = "Digite aqui",
  size = "lg",
  radius = "full",
  variant = "bordered",
  className = "w-full",
  borderStyle = "border-primary", // Default border style
  value,
  onChange,
  endContent,
  startContent,
}: BaseInputProps): JSX.Element {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 ml-5 block text-left text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Input
        classNames={{
          input: "text-primary placeholder:text-primary",
          inputWrapper: borderStyle,
        }}
        placeholder={placeholder}
        size={size}
        radius={radius}
        variant={variant}
        className={`${className}`}
        value={value}
        onChange={onChange}
        color="primary"
        endContent={endContent}
        startContent={startContent}
      />
    </div>
  );
}
