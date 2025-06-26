import * as React from "react";

type MicIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const MicIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: MicIconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17 * size}
      height={24 * size}
      fill="none"
      viewBox="0 0 17 24"
      className={`${color} ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.505 15.841a4.32 4.32 0 004.32-4.32V4.32a4.32 4.32 0 10-8.641 0v7.2a4.32 4.32 0 004.32 4.321zm7.2-7.2h-.721a.72.72 0 00-.72.72v2.16a5.767 5.767 0 01-6.336 5.732 5.935 5.935 0 01-5.184-5.989v-1.9a.72.72 0 00-.72-.72h-.72a.72.72 0 00-.72.72v1.807a8.168 8.168 0 006.84 8.177v1.537h-2.52a.72.72 0 00-.72.72v.72a.72.72 0 00.72.72h7.2a.72.72 0 00.72-.72V21.6a.72.72 0 00-.72-.72h-2.52v-1.52a7.928 7.928 0 006.84-7.841V9.361a.72.72 0 00-.72-.72z"
      />
    </svg>
  );
};

export default MicIcon;
