import * as React from "react";

type UserIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number; // Custom prop for size
  color?: string; // Custom prop for fill color
};

const UserIcon = ({
  size = 33, // Default size if not provided
  color = "#fff", // Default color if not provided
  ...props // Spread the remaining props
}: UserIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size} // Size can be customized via prop
    height={size} // Size can be customized via prop
    viewBox="0 0 33 33"
    {...props} // Spread any additional props like className, style, etc.
  >
    <path
      fill={color} // Use the color prop, default to white (#fff)
      d="M16.355 16.5a8 8 0 10-8-8 8.023 8.023 0 008 8zm0 4c-5.3 0-16 2.7-16 8v4h32v-4c0-5.3-10.7-8-16-8z"
    />
  </svg>
);

export default UserIcon;
