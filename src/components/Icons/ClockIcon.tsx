import * as React from "react";

type ClockIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const ClockIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: ClockIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24 * size}
      height={25 * size}
      viewBox="0 0 24 25"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        d="M12 .318a12 12 0 100 24 12 12 0 000-24zm2.762 16.937l-4.268-3.1a.583.583 0 01-.237-.469V5.543a.582.582 0 01.581-.58h2.323a.582.582 0 01.581.58v6.663l3.073 2.235a.579.579 0 01.126.813l-1.365 1.877a.585.585 0 01-.814.124z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ClockIcon;
