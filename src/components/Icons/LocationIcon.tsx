import * as React from "react";

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {}

const LocationIcon: React.FC<SvgComponentProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={32}
    viewBox="0 0 31 32"
    fill="none"
    {...props}
  >
    <path
      fill="#007D77"
      d="M30.849 14.072h-3.04c-.834-5.37-5.087-9.623-10.457-10.455V.577h-3.856v3.04c-5.37.832-9.623 5.086-10.456 10.455H0v3.857h3.04c.833 5.369 5.087 9.623 10.456 10.455v3.04h3.856v-3.04c5.37-.832 9.623-5.086 10.456-10.456h3.04v-3.856Zm-6.965 0H20.88a5.8 5.8 0 0 0-3.527-3.526V7.54a8.705 8.705 0 0 1 6.532 6.531Zm-8.46 3.857a1.928 1.928 0 1 1 0-3.857 1.928 1.928 0 0 1 0 3.857ZM13.496 7.54v3.005a5.8 5.8 0 0 0-3.526 3.526H6.964a8.705 8.705 0 0 1 6.532-6.531ZM6.964 17.928H9.97a5.8 5.8 0 0 0 3.526 3.527v3.005a8.705 8.705 0 0 1-6.532-6.532Zm10.388 6.532v-3.005a5.8 5.8 0 0 0 3.527-3.526h3.005a8.705 8.705 0 0 1-6.532 6.531Z"
    />
  </svg>
);
export default LocationIcon;
