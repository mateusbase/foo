import { ButtonProps } from "@nextui-org/react";

export interface ButtonRootProps extends ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface ButtonIconProps {
  children?: React.ReactNode;
  loading?: boolean;
}
