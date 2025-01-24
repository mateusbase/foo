import * as React from "react";

type BodyIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const BodyIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: BodyIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 116}
    height={size * 116}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 116 116"
    {...props}
  >
    <path fill="url(#pattern0_6419_11030)" d="M0 0h116v116H0z" />
    <defs>
      <pattern
        id="pattern0_6419_11030"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11030" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11030"
        width="128"
        height="128"
      />
    </defs>
  </svg>
);
export default BodyIcon;
