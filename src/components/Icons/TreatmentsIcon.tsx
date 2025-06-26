import * as React from "react";

type TreatmentsIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const TreatmentsIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: TreatmentsIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 25}
    height={size * 22}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 25 22"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11.86 10.671a.726.726 0 0 0 1.06 0l4.53-4.75a3.45 3.45 0 0 0-.233-4.943 3.16 3.16 0 0 0-4.364.32l-.466.487-.462-.483A3.16 3.16 0 0 0 7.562.978 3.45 3.45 0 0 0 7.33 5.92zM23.921 13.9a1.38 1.38 0 0 0-1.772 0l-3.843 3.074a2.65 2.65 0 0 1-1.664.582h-4.92a.667.667 0 0 1-.264-1.288.7.7 0 0 1 .263-.043h3.257a1.385 1.385 0 0 0 1.385-1.107 1.333 1.333 0 0 0-1.315-1.556H8.394a4.9 4.9 0 0 0-3.087 1.09l-1.93 1.573H1.073a.67.67 0 0 0-.666.666v3.993a.67.67 0 0 0 .666.666h14.842c.605 0 1.192-.205 1.664-.582l6.29-5.033a1.33 1.33 0 0 0 .053-2.035"
    />
  </svg>
);
export default TreatmentsIcon;
