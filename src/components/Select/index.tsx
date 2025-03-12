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
  classNames,
  placeholder,
  disableAnimation = false,
  onSelectionChange,
}: BaseSelectProps): JSX.Element {
  return (
    <Select
      disableAnimation={disableAnimation}
      color={color}
      variant={variant}
      placeholder={placeholder || undefined}
      label={label}
      radius={radius}
      size={size}
      onSelectionChange={onSelectionChange}
      onChange={(e) => onChange?.(e.target.value)}
      defaultSelectedKeys={
        defaultSelectedKey ? [defaultSelectedKey] : undefined
      }
      startContent={startContent}
      endContent={endContent}
      labelPlacement={labelPlacement}
      selectorIcon={<ArrowDownIcon color={`text-${color}`} />}
      className={`${className}`}
      onTouchStart={(e) => e.stopPropagation()}
      classNames={{
        trigger: noBorder
          ? `bg-transparent border-none shadow-none `
          : `border-${color} border-1`,
        label: `text-${labelColor} text-base`,
        value: `!text-primary text-base`,
        base: "text-primary",
        ...classNames,
      }}
    >
      {options.map((option) => (
        <SelectItem
          key={option.key}
          value={option.value}
          classNames={{
            base: `
              data-[hover=true]:!bg-primary 
              data-[hover=true]:!text-white 
              data-[focus=true]:!bg-primary 
              data-[focus=true]:!text-white
              data-[selected=true]:!bg-primary
              data-[selected=true]:!text-white
              aria-[selected=true]:!bg-primary
              aria-[selected=true]:!text-white
            `,
            title: `
              text-darkGray
              data-[focus=true]:!bg-primary 
              data-[hover=true]:!text-white 
              data-[selected=true]:!text-white
              aria-[selected=true]:!text-white
            `,
            selectedIcon: "!text-white",
          }}
        >
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
