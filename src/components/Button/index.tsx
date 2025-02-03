import { forwardRef } from "react";
import { Button } from "@heroui/react";
import { BaseButtonProps } from "./types";

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
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
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref} // Passando o ref corretamente
        color={color}
        size={size}
        variant={variant}
        className={className}
        onClick={onClick}
        disabled={disabled}
        startContent={startContent}
        endContent={endContent}
        radius={radius}
        {...props} // Passa todas as props corretamente
      >
        {children}
      </Button>
    );
  },
);

export default BaseButton;
