import * as React from "react";

const PinIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="35"
    fill="none"
    viewBox="0 0 26 35"
    {...props}
  >
    <path
      fill="#fff"
      d="M13.06.274A12.219 12.219 0 00.755 12.333c0 9.044 12.3 22.394 12.3 22.394s12.3-13.351 12.3-22.394A12.22 12.22 0 0013.06.273zm0 16.365a4.308 4.308 0 11.174-8.614 4.308 4.308 0 01-.174 8.614z"
    />
  </svg>
);
export default PinIcon;
