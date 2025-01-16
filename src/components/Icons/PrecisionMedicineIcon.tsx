import * as React from "react";

type PrecisionMedicineIcon = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const PrecisionMedicineIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: PrecisionMedicineIcon): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26 * size}
    height={26 * size}
    fill="none"
    viewBox="0 0 26 26"
    className={`${color} ${className}`}
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.285 7.216a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M3.659 16.84H.909v5.5a2.76 2.76 0 0 0 2.75 2.75h5.5v-2.75h-5.5zm0-13.751h5.5V.34h-5.5a2.76 2.76 0 0 0-2.75 2.75v5.5h2.75zM22.909.34h-5.5v2.75h5.5v5.5h2.75v-5.5a2.76 2.76 0 0 0-2.75-2.75m0 22h-5.5v2.75h5.5a2.76 2.76 0 0 0 2.75-2.75v-5.5h-2.75z"
    />
  </svg>
);

export default PrecisionMedicineIcon;
