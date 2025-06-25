import { cva } from "class-variance-authority";
import { BaseSelectProps } from "./types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Base";

const inputVariants = cva(
  [
    "disabled:cursor-not-allowed w-full rounded-full border-gray-300 outline-current",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-8 min-h-8 px-2",
        md: "h-10 min-h-10 px-4",
        lg: "h-[54px] min-h-[54px] px-4",
      },
    },

    defaultVariants: {
      size: "lg",
    },
  },
);

export default function BaseSelect({
  className = "w-full",
  options,
  startContent,
  onChange,
  placeholder,
  defaultValue,
  value,
  size,
  disabled = false,
}: BaseSelectProps): JSX.Element {
  return (
    <Select
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      disabled={disabled}
    >
      <SelectTrigger
        className={inputVariants({ className, size })}
        disabled={disabled}
      >
        {startContent}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options?.map((option) => (
          <SelectItem key={option.value} value={`${option.value}`}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
