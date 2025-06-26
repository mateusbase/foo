import * as React from "react";

type AllOfCancerIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const AllOfCancerIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: AllOfCancerIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 32}
    height={size * 32}
    viewBox="0 0 32 32"
    className={`${color} ${className}`}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M29.384 16.494a3.457 3.457 0 0 0-1.191-5.6 4.476 4.476 0 0 0-4.084-6.324 4.482 4.482 0 0 0-8.22-2.475 4.477 4.477 0 0 0-7.412 2.414h-.09a4.483 4.483 0 0 0-4.483 4.48c0 .089.008.176.013.263a3.457 3.457 0 0 0-1.718 5.217 3.456 3.456 0 0 0 .834 6.355 4.46 4.46 0 0 0 3.56 5.55v.071a4.478 4.478 0 0 0 6.9 3.771 5.444 5.444 0 0 0 8.293-.505c.109.006.218.017.329.017a5.438 5.438 0 0 0 5.272-6.84c.061 0 .121.01.183.01a3.458 3.458 0 0 0 1.814-6.4m-19.382 4.945a2 2 0 1 1 0-4 2 2 0 0 1 0 4m4.609-8.37a2 2 0 1 1 0-4 2 2 0 0 1 0 4m5.55 11.6a1.708 1.708 0 1 1 0-3.415 1.708 1.708 0 0 1 0 3.415m2.321-7.126a2.172 2.172 0 1 1 0-4.343 2.172 2.172 0 0 1 0 4.343"
    />
  </svg>
);

export default AllOfCancerIcon;
