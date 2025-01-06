import * as React from "react";

type HematologyIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const HematologyIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: HematologyIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 60}
      height={size * 61}
      fill="none"
      viewBox="0 0 60 61"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M39.132 30.848a21.65 21.65 0 0 1-.319 21.29c1.393.363 2.826.55 4.265.555a16.88 16.88 0 0 0 16.97-16.787 16.5 16.5 0 0 0-2.023-7.937L43.08.477 32.828 19.299l.805 1.478zm-1.886-8.753 3.5-6.41a1.306 1.306 0 1 1 2.292 1.252l-3.5 6.409a1.306 1.306 0 1 1-2.292-1.251"
      />
      <path
        fill="currentColor"
        d="M19.581 60.525a19.65 19.65 0 0 0 16.709-9.228 19.1 19.1 0 0 0 .548-19.2l-5.5-10.066L19.581.477 2.324 32.095A19.1 19.1 0 0 0 0 41.218a19.447 19.447 0 0 0 19.581 19.307m-8.834-32.972 4.333-7.936a1.306 1.306 0 0 1 2.292 1.25l-4.334 7.938a1.306 1.306 0 1 1-2.291-1.252m-4.7 8.953a1.306 1.306 0 0 1 2.455.889 11.28 11.28 0 0 0 2.824 11.982 1.306 1.306 0 0 1-1.816 1.878 13.9 13.9 0 0 1-3.466-14.75"
      />
    </svg>
  );
};

export default HematologyIcon;
