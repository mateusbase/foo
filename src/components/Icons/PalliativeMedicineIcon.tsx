import * as React from "react";

type PalliativeMedicineIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const PalliativeMedicineIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: PalliativeMedicineIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 72}
      height={size * 47}
      fill="none"
      viewBox="0 0 72 47"
      className={`${color} ${className}`}
      {...props}
    >
      <mask
        id="mask0_3726_13279"
        width="72"
        height="47"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M71.339 0h-71v47h71z" />
      </mask>
      <g fill="currentColor" mask="url(#mask0_3726_13279)">
        <path d="M67.789-.084a3.56 3.56 0 0 0-3.55 3.55v11.192a6.65 6.65 0 0 1-.488 8.189l-7.68 8.681s-.532-3.351 2.835-6.776l3.072-3.474a4.31 4.31 0 1 0-6.46-5.711l-6.543 7.4c-8.145 2.502-10.653 7.28-10.768 21.087a2.18 2.18 0 0 0 1.025 1.884c1.04.632 3.122 1.311 7.242 1.311 4.078 0 6.165-.667 7.225-1.292a2.44 2.44 0 0 0 1.134-1.882 8.3 8.3 0 0 1 2.594-5.266c1.666-1.867 3.186-3.486 4.55-4.944 5.859-6.248 9.36-10.02 9.36-17.383V3.466a3.56 3.56 0 0 0-3.548-3.55M22.702 22.963l-6.544-7.4a4.312 4.312 0 0 0-6.46 5.715l3.075 3.474c3.368 3.425 2.835 6.776 2.835 6.776l-7.68-8.684q-.448-.511-.79-1.1a6.65 6.65 0 0 1 .3-7.091V3.466a3.55 3.55 0 0 0-7.1 0v13.017c0 7.362 3.506 11.133 9.364 17.38 1.366 1.46 2.883 3.077 4.549 4.944a8.3 8.3 0 0 1 2.594 5.268 2.45 2.45 0 0 0 1.136 1.882c1.06.625 3.145 1.292 7.225 1.292 4.12 0 6.2-.682 7.24-1.311a2.17 2.17 0 0 0 1.025-1.886c-.111-13.8-2.623-18.583-10.77-21.089" />
      </g>
    </svg>
  );
};

export default PalliativeMedicineIcon;
