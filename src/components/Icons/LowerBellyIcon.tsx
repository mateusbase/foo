import * as React from "react";

type LowerBellyIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const LowerBellyIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: LowerBellyIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 116}
    height={size * 116}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 116 116"
    {...props}
  >
    <path fill="url(#pattern0_6419_11038)" d="M0 0h116v116H0z" opacity="0.4" />
    <defs>
      <pattern
        id="pattern0_6419_11038"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11038" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11038"
        width="128"
        height="128"
      />
    </defs>
  </svg>
);
export default LowerBellyIcon;
