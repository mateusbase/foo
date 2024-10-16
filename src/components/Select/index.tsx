import { Select, SelectItem } from "@nextui-org/react";
import { BaseSelectProps } from "./types";
import ArrowDownIcon from "../Icons/ArrowDownIcon";

export default function BaseSelect({
  color = "default",
  variant = "bordered",
  label = " ",
  radius = "full",
  size = "sm",
  className = "w-full",
  borderStyle = "border-primary",
  options,
  startContent,
  endContent,
  labelPlacement,
  defaultSelectedKey,
  onChange,
}: BaseSelectProps): JSX.Element {
  return (
    <Select
      classNames={{
        trigger: `border-${color}`,
      }}
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
      selectorIcon={<ArrowDownIcon color={`text-${color}`} />}
    >
      {options.map((option) => (
        <SelectItem key={option.key} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
