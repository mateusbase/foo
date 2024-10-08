import * as React from "react";

type CheckIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const CheckIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: CheckIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26 * size}
      height={25 * size}
      fill="none"
      className={`${color} ${className}`}
      viewBox="0 0 26 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M9.02 10.928l3.51 3.51 11.7-11.7"
        className={`${color} ${className}`}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M23.06 12.098v8.19a2.34 2.34 0 01-2.34 2.34H4.34A2.34 2.34 0 012 20.288V3.908a2.34 2.34 0 012.34-2.34h12.87"
      />
    </svg>
  );
};

export default CheckIcon;
