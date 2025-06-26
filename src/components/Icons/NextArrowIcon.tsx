import * as React from "react";

type NextArrowIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const NextArrowIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: NextArrowIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19 * size}
    height={31 * size}
    fill="none"
    viewBox="0 0 19 31"
    className={`${color} ${className}`}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.203 15.457L1.522 27.124A2.207 2.207 0 004.65 30.24l13.23-13.22a2.2 2.2 0 00.064-3.042L4.659.665a2.207 2.207 0 00-3.123 3.118l11.667 11.674z"
    />
  </svg>
);
export default NextArrowIcon;
