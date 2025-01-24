import * as React from "react";

type AbdomenIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const AbdomenIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: AbdomenIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 116}
    height={size * 116}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 116 116"
    {...props}
  >
    <path fill="url(#pattern0_6419_11034)" d="M0 0h116v116H0z" opacity="0.4" />
    <defs>
      <pattern
        id="pattern0_6419_11034"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11034" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11034"
        width="128"
        height="128"
      />
    </defs>
  </svg>
);
export default AbdomenIcon;
