import * as React from "react";

type LunchIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const LunchIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: LunchIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 70}
      height={size * 62}
      fill="none"
      viewBox="0 0 70 62"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M69.84 16.643 64.102 61.63H44.719l-5.715-45.208h23.663L67.344.268l2.65.8-4.486 15.545 4.333.034zM36.264 42.672s.725-5.833-9.326-5.833H10.93c-10.036.004-9.326 5.833-9.326 5.833zM1.604 55.797s-.71 5.833 9.327 5.833h16.008c10.05 0 9.326-5.833 9.326-5.833zM34.76 52.88c1.645 0 2.974-1.625 2.974-3.644s-1.33-3.647-2.974-3.647H2.975c-1.643-.001-2.98 1.615-2.98 3.646s1.337 3.645 2.98 3.645z"
      />
    </svg>
  );
};

export default LunchIcon;
