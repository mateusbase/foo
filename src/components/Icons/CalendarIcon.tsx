import * as React from "react";

type CalendarIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const CalendarIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: CalendarIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={33 * size}
      height={33 * size}
      viewBox="0 0 24 21"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        d="M21.156.568h-2.251v1.35a.451.451 0 01-.45.45h-.9a.45.45 0 01-.45-.45V.568H6.302v1.35a.451.451 0 01-.45.45h-.9a.451.451 0 01-.45-.45V.568H2.251A2.257 2.257 0 000 2.818v15.3a2.257 2.257 0 002.251 2.25h18.905a2.257 2.257 0 002.25-2.25v-15.3a2.257 2.257 0 00-2.25-2.25zm.45 16.88a1.13 1.13 0 01-1.125 1.125H2.925A1.129 1.129 0 011.8 17.448V7.318a.451.451 0 01.45-.45h18.906a.45.45 0 01.45.45v10.13z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CalendarIcon;
