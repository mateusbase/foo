import * as React from "react";

type DermatologyIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const DermatologyIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: DermatologyIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 63}
      height={size * 38}
      fill="none"
      viewBox="0 0 63 38"
      className={`${color} ${className}`}
      {...props}
    >
      <mask
        id="mask0_3726_13270"
        width="63"
        height="38"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M62.339 0h-62v38h62z" />
      </mask>
      <g fill="currentColor" mask="url(#mask0_3726_13270)">
        <path d="M46.819 10.338c-7.374 0-15.572-5.071-15.918-5.287A42 42 0 0 0 25.94 2.51 27.3 27.3 0 0 0 15.805 0c-.422 0-.854.02-1.284.059h-.042C7.875.617.779 5.007.709 5.051a.77.77 0 0 1-.411.117v12.795a46 46 0 0 1 5.009-2.507 27.4 27.4 0 0 1 10.5-2.533c7.374 0 15.572 5.071 15.918 5.287a42 42 0 0 0 4.96 2.541 27.3 27.3 0 0 0 10.136 2.51c3.421-.15 6.78-.967 9.888-2.408a43 43 0 0 0 5.209-2.644.77.77 0 0 1 .41-.116V5.3a44.7 44.7 0 0 1-7.32 3.411 24.6 24.6 0 0 1-8.19 1.627" />
        <path d="M15.805 27.395c7.374 0 15.572 5.071 15.918 5.287a42 42 0 0 0 4.96 2.541 27.3 27.3 0 0 0 10.136 2.51c.422 0 .854-.02 1.284-.059h.042c6.6-.556 13.7-4.945 13.77-4.99a.77.77 0 0 1 .41-.117V19.773a46 46 0 0 1-5.008 2.507 27.4 27.4 0 0 1-10.5 2.533c-7.374 0-15.572-5.071-15.918-5.287a42 42 0 0 0-4.961-2.541 27.3 27.3 0 0 0-10.133-2.512c-3.422.15-6.781.967-9.888 2.408a43 43 0 0 0-5.21 2.644.77.77 0 0 1-.41.116v12.794a44.7 44.7 0 0 1 7.319-3.413 24.6 24.6 0 0 1 8.189-1.627" />
      </g>
    </svg>
  );
};

export default DermatologyIcon;
