import * as React from "react";

type OthersIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const OthersIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: OthersIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 116}
    height={size * 116}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 116 116"
    {...props}
  >
    <path fill="url(#pattern0_6419_11046)" d="M0 0h116v116H0z" opacity="0.4" />
    <defs>
      <pattern
        id="pattern0_6419_11046"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11046" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11046"
        width="128"
        height="128"
      />
    </defs>
  </svg>
);
export default OthersIcon;
