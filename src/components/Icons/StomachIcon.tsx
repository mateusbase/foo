import * as React from "react";

type StomachIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const StomachIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: StomachIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_10994)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_10994"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_10994" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_10994"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default StomachIcon;
