import * as React from "react";

type PreviousArrowIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const PreviousArrowIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: PreviousArrowIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18 * size}
    height={31 * size}
    fill="none"
    viewBox="0 0 18 31"
    className={`${color} ${className}`}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.319 15.43L16.996 3.763A2.205 2.205 0 0013.872.648L.642 13.868A2.2 2.2 0 00.58 16.91L13.863 30.22a2.206 2.206 0 003.803-1.54 2.205 2.205 0 00-.68-1.57L5.32 15.43z"
    />
  </svg>
);
export default PreviousArrowIcon;
