type ButtonRootProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

type ButtonIconProps = {
  children?: React.ReactNode;
  loading?: boolean;
};

export type { ButtonRootProps, ButtonIconProps };
