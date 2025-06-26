import * as React from "react";

type ThyroidIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const ThyroidIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: ThyroidIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_10985)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_10985"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_10985" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_10985"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default ThyroidIcon;
