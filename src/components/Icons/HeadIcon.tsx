import * as React from "react";

type HeadIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const HeadIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: HeadIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 116}
    height={size * 116}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 116 116"
    {...props}
  >
    <path fill="url(#pattern0_6419_11042)" d="M0 0h116v116H0z" opacity="0.4" />
    <defs>
      <pattern
        id="pattern0_6419_11042"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11042" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11042"
        width="128"
        height="128"
      />
    </defs>
  </svg>
);
export default HeadIcon;
