import * as React from "react";

type WifiIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const WifiIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: WifiIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 60}
      height={size * 43}
      fill="none"
      viewBox="0 0 60 43"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M59.519 12.469a43.59 43.59 0 0 0-59.046 0 1.49 1.49 0 0 0-.033 2.154l3.21 3.185a1.52 1.52 0 0 0 2.1.036 35.97 35.97 0 0 1 48.492 0 1.523 1.523 0 0 0 2.1-.036l3.21-3.185a1.49 1.49 0 0 0-.033-2.154m-29.523 18.48a6 6 0 1 0 0 12 6 6 0 0 0 0-12m19-7.837a28.78 28.78 0 0 0-38 0 1.48 1.48 0 0 0-.053 2.17l3.229 3.187a1.53 1.53 0 0 0 2.067.075 21.115 21.115 0 0 1 27.515 0 1.53 1.53 0 0 0 2.067-.075l3.229-3.187a1.48 1.48 0 0 0-.054-2.17"
      />
    </svg>
  );
};

export default WifiIcon;
