import * as React from "react";

type MarkerCircleIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const MarkerCircleIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: MarkerCircleIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={31 * size}
      height={37 * size}
      fill="none"
      viewBox="0 0 31 37"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M29 15.5C29 26 15.5 35 15.5 35S2 26 2 15.5a13.5 13.5 0 0127 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M20 15.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
      />
    </svg>
  );
};

export default MarkerCircleIcon;
