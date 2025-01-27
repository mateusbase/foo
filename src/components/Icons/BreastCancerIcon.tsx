import * as React from "react";

type BreastCancerIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const BreastCancerIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: BreastCancerIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <path
      fill="#F16687"
      d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M36 40.09A6.545 6.545 0 1 0 36 27a6.545 6.545 0 0 0 0 13.09Z"
    />
    <path
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M35.182 35.183a.818.818 0 1 0 0-1.636.818.818 0 0 0 0 1.636Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M24.85 22.094c-3.217 2.93-5.213 7.108-5.213 11.755 0 8.874 7.324 16.063 16.363 16.063s16.364-7.19 16.364-16.063c0-4.647-2.012-8.824-5.213-11.755"
    />
  </svg>
);
export default BreastCancerIcon;
