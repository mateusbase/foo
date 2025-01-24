import * as React from "react";

type ColorectalIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const ColorectalIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: ColorectalIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_10967)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_10967"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_10967" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_10967"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default ColorectalIcon;
