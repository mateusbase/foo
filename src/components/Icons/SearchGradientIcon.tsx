import * as React from "react";

type SearchGradientIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const SearchGradientIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: SearchGradientIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={42 * size}
      height={42 * size}
      className={`${color} ${className}`}
      viewBox="0 0 42 42"
      {...props}
    >
      <path
        fill="url(#paint0_linear_3726_13139)"
        d="M41.114 38.764 29.505 27.04a16.544 16.544 0 1 0-2.51 2.544L38.526 41.23a1.787 1.787 0 0 0 2.522.065 1.8 1.8 0 0 0 .065-2.532m-24.61-9.033a13.064 13.064 0 1 1 9.24-3.826 12.98 12.98 0 0 1-9.24 3.826"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3726_13139"
          x1="8.903"
          x2="41.603"
          y1="0.215"
          y2="0.215"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00B6AD" />
          <stop offset="1" stopColor="#BA99E7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SearchGradientIcon;
