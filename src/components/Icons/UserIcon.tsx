import * as React from "react";

type UserIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const UserIcon = ({
  size = 33,
  color = "#fff",
  ...props
}: UserIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 33 33"
    {...props}
  >
    <path
      fill={color}
      d="M16.355 16.5a8 8 0 10-8-8 8.023 8.023 0 008 8zm0 4c-5.3 0-16 2.7-16 8v4h32v-4c0-5.3-10.7-8-16-8z"
    />
  </svg>
);

export default UserIcon;
