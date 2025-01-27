import * as React from "react";

type ThoraxBackIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const ThoraxBackIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: ThoraxBackIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 116}
    height={size * 116}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 116 116"
    {...props}
  >
    <path fill="url(#pattern0_6419_11054)" d="M0 0h116v116H0z" opacity="0.4" />
    <defs>
      <pattern
        id="pattern0_6419_11054"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11054" transform="scale(.00781)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11054"
        width="128"
        height="128"
      />
    </defs>
  </svg>
);
export default ThoraxBackIcon;
