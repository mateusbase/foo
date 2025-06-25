import * as React from "react";

type ArrowDownIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const ArrowDownIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: ArrowDownIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24 * size}
    height={14 * size}
    viewBox="0 0 24 14"
    fill="none"
    className={`${color} ${className}`}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.1946 9.68125L21.1246 0.744251C21.2809 0.587149 21.4666 0.462477 21.6712 0.377404C21.8757 0.292331 22.0951 0.248535 22.3166 0.248535C22.5382 0.248535 22.7576 0.292331 22.9621 0.377404C23.1667 0.462477 23.3524 0.587149 23.5086 0.744251C23.8234 1.06251 24 1.4921 24 1.93975C24 2.3874 23.8234 2.81699 23.5086 3.13525L13.3946 13.2603C13.0875 13.5662 12.6743 13.742 12.241 13.7511C11.8076 13.7602 11.3874 13.602 11.0676 13.3093L0.874637 3.14225C0.557571 2.82611 0.379076 2.39697 0.37842 1.94923C0.377763 1.50148 0.554999 1.07182 0.871137 0.754751C1.18728 0.437685 1.61642 0.259191 2.06416 0.258534C2.51191 0.257878 2.94157 0.435113 3.25864 0.751251L12.1946 9.68125Z"
    />
  </svg>
);

export default ArrowDownIcon;
