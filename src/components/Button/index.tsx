/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/react";

interface BaseButtonProps {
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "default";
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "bordered" | "ghost";
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export default function BaseButton({
  color = "primary",
  size = "lg",
  variant = "solid",
  className = "",
  onClick,
  children,
  disabled = false,
  width = "200px",
  startContent,
  endContent,
}: BaseButtonProps): JSX.Element {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      className={`${className} w-[${width}]`}
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
