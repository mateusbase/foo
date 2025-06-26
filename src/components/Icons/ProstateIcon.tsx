import * as React from "react";

type ProstateIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const ProstateIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: ProstateIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 72}
    height={size * 72}
    className={`${color} ${className}`}
    fill="none"
    viewBox="0 0 72 73"
    {...props}
  >
    <path fill="url(#pattern0_6419_10949)" d="M0 .875h72v72H0z" />
    <defs>
      <pattern
        id="pattern0_6419_10949"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_6419_10949" transform="scale(.01136)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_6419_10949"
        width="88"
        height="88"
      />
    </defs>
  </svg>
);
export default ProstateIcon;
