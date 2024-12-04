import { IconWithTitleProps } from "./types";

export const IconWithTitle = ({
  icon,
  title,
}: IconWithTitleProps): JSX.Element => (
  <div className="flex items-center gap-3">
    {icon}
    <h3 className="text-lg font-bold text-primary">{title}</h3>
  </div>
);
