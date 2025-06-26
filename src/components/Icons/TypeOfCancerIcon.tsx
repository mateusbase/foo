import * as React from "react";

type TypeOfCancerIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const TypeOfCancerIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: TypeOfCancerIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={72 * size}
      height={72 * size}
      viewBox="0 0 72 72"
      className={`${color} ${className}`}
      {...props}
    >
      <path fill="url(#pattern0_6479_24268)" d="M0 0h72v72H0z" />
      <defs>
        <pattern
          id="pattern0_6479_24268"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#image0_6479_24268" transform="scale(.01136)" />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,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"
          id="image0_6479_24268"
          width="88"
          height="88"
        />
      </defs>
    </svg>
  );
};

export default TypeOfCancerIcon;
