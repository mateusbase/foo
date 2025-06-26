import { cn } from "@/styles/classes";
import { useId } from "react";
import { RadioGroupItem } from "./Base";
import { BaseRadioProps } from "./types";

export function Radio({
  className,
  children,
  disabled = false,
  id,
  ...props
}: BaseRadioProps): JSX.Element {
  const generatedId = useId();
  const actualId = id || generatedId;

  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        {...props}
        id={actualId}
        disabled={disabled}
        className={cn("cursor-pointer", className)}
      />

      {children && (
        <label
          htmlFor={actualId}
          className="cursor-pointer font-semibold text-gray-600"
        >
          {children}
        </label>
      )}
    </div>
  );
}
