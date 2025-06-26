import { IconWithTitleProps } from "./types";

export const IconWithTitle = ({
  icon,
  title,
  children,
}: IconWithTitleProps & { children?: React.ReactNode }): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      {icon}
      <h3 className="text-lg font-bold text-primary">{title}</h3>
    </div>
    {children && <div className="ml-11 mt-2">{children}</div>}
  </div>
);
