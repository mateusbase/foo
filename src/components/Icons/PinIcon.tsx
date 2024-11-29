import * as React from "react";

type PinIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const PinIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: PinIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33 * size}
    height={33 * size}
    viewBox="0 0 26 35"
    className={`${color} ${className}`}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.06.274A12.22 12.22 0 0 0 .755 12.333c0 9.044 12.3 22.394 12.3 22.394s12.3-13.351 12.3-22.394A12.22 12.22 0 0 0 13.06.273m0 16.365a4.308 4.308 0 1 1 .174-8.614 4.308 4.308 0 0 1-.174 8.614"
    />
  </svg>
);
export default PinIcon;
