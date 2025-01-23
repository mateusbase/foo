import * as React from "react";

type GeneralIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const GeneralIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: GeneralIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={72 * size}
      height={72 * size}
      viewBox="0 0 72 72"
      className={`${color} ${className}`}
      {...props}
    >
      <path fill="url(#pattern0_6479_24263)" d="M0 0h72v72H0z" />
      <defs>
        <pattern
          id="pattern0_6479_24263"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#image0_6479_24263" transform="scale(.01136)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="image0_6479_24263"
          width="88"
          height="88"
        />
      </defs>
    </svg>
  );
};

export default GeneralIcon;
