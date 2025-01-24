import * as React from "react";

type SkinIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const SkinIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: SkinIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_11003)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_11003"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11003" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11003"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default SkinIcon;
