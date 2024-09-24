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
  width = "100%",
  startContent,
  endContent,
}: BaseButtonProps): JSX.Element {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={{ width }}
      startContent={startContent}
      endContent={endContent}
    >
      {children}
    </Button>
  );
}