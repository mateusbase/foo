import * as React from "react";

type HeartIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const HeartIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: HeartIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 60}
      height={size * 53}
      fill="none"
      viewBox="0 0 60 53"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M54.176 3.59C47.755-1.884 38.201-.9 32.31 5.182l-2.309 2.38-2.309-2.38C21.81-.899 12.247-1.883 5.826 3.59a16.827 16.827 0 0 0-1.16 24.363l22.675 23.414a3.673 3.673 0 0 0 5.308 0l22.676-23.414A16.815 16.815 0 0 0 54.176 3.59"
      />
    </svg>
  );
};

export default HeartIcon;
