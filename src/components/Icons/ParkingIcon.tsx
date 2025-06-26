import * as React from "react";

type ParkingIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const ParkingIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: ParkingIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 60}
      height={size * 46}
      fill="none"
      viewBox="0 0 60 46"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M58.591 13.574h-7.016l-1.95-4.875A13.06 13.06 0 0 0 37.44.449H22.557a13.06 13.06 0 0 0-12.186 8.25l-1.95 4.875H1.406A1.406 1.406 0 0 0 .042 15.32l.7 2.813a1.405 1.405 0 0 0 1.367 1.065h2.352a7.45 7.45 0 0 0-2.588 5.625v5.625a7.44 7.44 0 0 0 1.876 4.914v6.336a3.75 3.75 0 0 0 3.75 3.75h3.75a3.75 3.75 0 0 0 3.75-3.75v-3.75h30v3.75a3.75 3.75 0 0 0 3.75 3.75h3.75a3.75 3.75 0 0 0 3.75-3.75v-6.336a7.43 7.43 0 0 0 1.875-4.914v-5.625a7.45 7.45 0 0 0-2.586-5.625h2.352a1.405 1.405 0 0 0 1.364-1.065l.7-2.813a1.408 1.408 0 0 0-1.365-1.747zm-41.257-2.09a5.625 5.625 0 0 1 5.223-3.535H37.44a5.63 5.63 0 0 1 5.223 3.536l2.336 5.839h-30l2.336-5.84zm-6.085 18.942a3.537 3.537 0 0 1-3.75-3.74 3.537 3.537 0 0 1 3.75-3.737c2.25 0 5.625 3.364 5.625 5.607s-3.375 1.87-5.625 1.87m37.5 0c-2.25 0-5.625.374-5.625-1.87 0-2.242 3.375-5.607 5.625-5.607a3.537 3.537 0 0 1 3.75 3.738 3.537 3.537 0 0 1-3.75 3.739"
      />
    </svg>
  );
};

export default ParkingIcon;
