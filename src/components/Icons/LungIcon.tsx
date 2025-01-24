import * as React from "react";

type LungIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const LungIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: LungIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_10976)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_10976"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_10976" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_10976"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default LungIcon;
