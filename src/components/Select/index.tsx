import { Select, SelectItem } from "@heroui/react";
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
  onChange,
  noBorder = false,
}: BaseSelectProps): JSX.Element {
  return (
    <Select
      color={color}
      variant={variant}
      label={label}
      radius={radius}
      size={size}
      onChange={(e) => onChange?.(e.target.value)}
      defaultSelectedKeys={
        defaultSelectedKey ? [defaultSelectedKey] : undefined
      }
      startContent={startContent}
      endContent={endContent}
      labelPlacement={labelPlacement}
      selectorIcon={<ArrowDownIcon color={`text-${color}`} />}
      className={`${className}`}
      classNames={{
        trigger: noBorder
          ? `bg-transparent border-none shadow-none `
          : `border-${color} border-1`,
        label: `text-${labelColor} text-base`,
        value: `text-${labelColor} text-base`,
      }}
    >
      {options.map((option) => (
        <SelectItem
          key={option.key}
          value={option.value}
          classNames={{
            base: `
              data-[hover=true]:bg-gray-200
              data-[focus=true]:bg-gray-200
              data-[selected=true]:bg-primary
            `,
            title: `
              text-darkGray
              data-[selected=true]:text-white
            `,
            selectedIcon: "text-white",
          }}
        >
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
