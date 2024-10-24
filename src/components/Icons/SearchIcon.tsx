import * as React from "react";

type SearchIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const SearchIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: SearchIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23 * size}
      height={24 * size}
      className={`${color} ${className}`}
      viewBox="0 0 23 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22.733 21.817l-6.409-6.473a9.133 9.133 0 10-1.386 1.4l6.367 6.427a.986.986 0 001.392.036.993.993 0 00.036-1.39zM9.147 16.83a7.212 7.212 0 115.1-2.112 7.167 7.167 0 01-5.1 2.112z"
      />
    </svg>
  );
};

export default SearchIcon;
