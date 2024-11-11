/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/react";
import { BaseButtonProps } from "./types";

export default function BaseButton({
  color = "primary",
  size = "lg",
  variant = "solid",
  className = "",
  onClick,
  children,
  disabled = false,
  startContent,
  endContent,
  radius = "sm",
}: BaseButtonProps): JSX.Element {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
      startContent={startContent}
      endContent={endContent}
      radius={radius}
    >
      {children}
    </Button>
  );
}
