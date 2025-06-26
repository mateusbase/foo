import * as React from "react";

type BreastIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const BreastIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: BreastIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_10958)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_10958"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_10958" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_10958"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default BreastIcon;
