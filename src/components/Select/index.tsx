import { Select, SelectItem } from "@nextui-org/react";
import { IoArrowDown } from "react-icons/io5";
import { BaseSelectProps } from "./types";
import ArrowDownIcon from "../Icons/ArrowDownIcon";

export default function BaseSelect({
  color = "primary",
  variant = "bordered",
  label = " ",
  radius = "full",
  size = "sm",
  className = "w-full",
  options,
  startContent,
  endContent,
  labelPlacement,
  defaultSelectedKey,
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
      defaultSelectedKeys={
        defaultSelectedKey ? [defaultSelectedKey] : undefined
      }
      startContent={startContent}
      endContent={endContent}
      labelPlacement={labelPlacement}
      selectorIcon={<ArrowDownIcon className="text-primary" />}
    >
      {options.map((option) => (
        <SelectItem key={option.key} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
