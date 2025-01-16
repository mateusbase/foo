import * as React from "react";

type MicroscopeIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const MicroscopeIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: MicroscopeIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 24}
    height={size * 25}
    viewBox="0 0 24 25"
    className={`${color} ${className}`}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.554 15.394h.542v.722a.72.72 0 0 0 .722.722h1.806a.72.72 0 0 0 .722-.722v-.722h.542a1.445 1.445 0 0 0 1.444-1.445V3.84a1.445 1.445 0 0 0-1.444-1.445v-.723a.72.72 0 0 0-.722-.722H8.277a.72.72 0 0 0-.722.722v.722A1.445 1.445 0 0 0 6.11 3.838V13.95a1.445 1.445 0 0 0 1.444 1.445m13.723 5.778h-.058a8.652 8.652 0 0 0-6.442-14.445v2.89a5.778 5.778 0 1 1 0 11.555H2.499A2.167 2.167 0 0 0 .332 23.34a.72.72 0 0 0 .722.722h21.668a.72.72 0 0 0 .722-.722 2.167 2.167 0 0 0-2.167-2.167m-16.25-1.445h9.389a.36.36 0 0 0 .361-.36v-.723a.36.36 0 0 0-.361-.36H5.027a.36.36 0 0 0-.361.36v.722a.36.36 0 0 0 .361.361"
    />
  </svg>
);

export default MicroscopeIcon;
