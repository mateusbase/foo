import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { BaseSelectProps } from "./types";

export default function BaseSelect({
  color = "primary",
  variant = "bordered",
  label = "Selecione uma opção",
  radius = "full",
  size = "sm",
  className = "w-full",
  options,
  onChange,
}: BaseSelectProps): JSX.Element {
  return (
    <Select
      color={color}
      variant={variant}
      label={label}
      radius={radius}
      size={size}
      className={`${className}`}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option) => (
        <SelectItem key={option.key} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
