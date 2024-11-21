import { Select, SelectItem } from "@nextui-org/react";
import { BaseSelectProps } from "./types";
import ArrowDownIcon from "../Icons/ArrowDownIcon";

export default function BaseSelect({
  color = "default",
  variant = "bordered",
  label = " ",
  labelColor = "darkGray",
  radius = "full",
  size = "sm",
  className = "w-full",
  options,
  startContent,
  endContent,
  labelPlacement,
  defaultSelectedKey,
  optionsColor = "darkGray",
  onChange,
  noBorder = false,
}: BaseSelectProps): JSX.Element {
  return (
    <Select
      classNames={{
        trigger: noBorder
          ? `bg-transparent border-none shadow-none `
          : `border-${color} `,
        label: `text-${labelColor} text-base`,
        value: `text-${labelColor} text-base`,
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
        <SelectItem
          key={option.key}
          value={option.value}
          color={color}
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`text-${optionsColor}`}
        >
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
