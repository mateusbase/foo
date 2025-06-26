import * as React from "react";

type EsophagusIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const EsophagusIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: EsophagusIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_11012)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_11012"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_11012" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_11012"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default EsophagusIcon;
