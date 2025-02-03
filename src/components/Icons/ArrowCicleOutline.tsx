import * as React from "react";

type ArrowCicleOutlineIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const ArrowCicleOutlineIcon = ({
  size = 1,
  ...props
}: ArrowCicleOutlineIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 30}
    height={size * 31}
    fill="none"
    viewBox="0 0 30 31"
    {...props}
  >
    <path
      fill="url(#paint0_linear_2414_6241)"
      d="M22.997 12.315a1.362 1.362 0 010 1.92l-6.729 6.708a1.356 1.356 0 01-1.87.042l-6.63-6.609a1.355 1.355 0 111.912-1.92l5.7 5.618 5.7-5.759a1.341 1.341 0 011.917 0z"
    />
    <path
      fill="url(#paint1_linear_2414_6241)"
      d="M15.375.875a14.625 14.625 0 100 29.25 14.625 14.625 0 000-29.25zm0 2.25a12.37 12.37 0 018.747 21.122A12.37 12.37 0 016.628 6.753a12.269 12.269 0 018.747-3.628z"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2414_6241"
        x1="30"
        x2="30"
        y1="-25.099"
        y2="46.534"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00B6AD" />
        <stop offset="1" stopColor="#BA99E7" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2414_6241"
        x1="30"
        x2="30"
        y1="-25.099"
        y2="46.534"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00B6AD" />
        <stop offset="1" stopColor="#BA99E7" />
      </linearGradient>
    </defs>
  </svg>
);

export default ArrowCicleOutlineIcon;
