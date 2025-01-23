import * as React from "react";

type TreatmentIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const TreatmentIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: TreatmentIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={72 * size}
      height={72 * size}
      viewBox="0 0 72 72"
      className={`${color} ${className}`}
      {...props}
    >
      <path fill="url(#pattern0_6479_24273)" d="M0 0h72v72H0z" />
      <defs>
        <pattern
          id="pattern0_6479_24273"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#image0_6479_24273" transform="scale(.01136)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="image0_6479_24273"
          width="88"
          height="88"
        />
      </defs>
    </svg>
  );
};

export default TreatmentIcon;
