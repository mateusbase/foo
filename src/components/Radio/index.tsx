import { Radio } from "@nextui-org/react";
import { BaseRadioProps } from "./types";

export default function BaseRadio({
  color = "primary",
  size = "lg",
  className = "",
  children,
  disabled = false,
  ...props
}: BaseRadioProps): JSX.Element {
  return (
    <Radio
      {...props}
      size={size}
      color={color}
      className={className}
      disabled={disabled}
      classNames={{
        base: "cursor-pointer",
        label: "text-gray-600 font-semibold",
      }}
    >
      {children}
    </Radio>
  );
}
