import * as React from "react";

type UserIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};

const UserIcon = ({
  size = 1,
  color = "white",
  className = "",
  ...props
}: UserIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33 * size}
    height={33 * size}
    viewBox="0 0 33 33"
    className={`${color} ${className}`}
    {...props}
  >
    <path
      d="M16.355 16.5C17.9372 16.5 19.4839 16.0308 20.7995 15.1518C22.1151 14.2727 23.1405 13.0233 23.746 11.5615C24.3515 10.0997 24.5099 8.49113 24.2013 6.93928C23.8926 5.38743 23.1307 3.96197 22.0118 2.84315C20.893 1.72433 19.4676 0.962403 17.9157 0.653721C16.3639 0.34504 14.7553 0.503466 13.2935 1.10897C11.8317 1.71447 10.5823 2.73985 9.70322 4.05544C8.82417 5.37103 8.35498 6.91775 8.35498 8.5C8.36105 10.6199 9.20585 12.6512 10.7048 14.1502C12.2038 15.6491 14.2351 16.4939 16.355 16.5ZM16.355 20.5C11.055 20.5 0.35498 23.2 0.35498 28.5V32.5H32.355V28.5C32.355 23.2 21.655 20.5 16.355 20.5Z"
      fill="white"
    />
  </svg>
);

export default UserIcon;
