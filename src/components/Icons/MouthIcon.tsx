import * as React from "react";

type MouthIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const MouthIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: MouthIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_11021)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_11021"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11021" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11021"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default MouthIcon;
