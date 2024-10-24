import * as React from "react";

const DocumentIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="33"
    fill="none"
    viewBox="0 0 26 33"
    {...props}
  >
    <path
      fill="#F0F0F0"
      d="M17.385 8.231h7.451a.405.405 0 00.409-.409 2.422 2.422 0 00-.876-1.875L18.122.739a2.63 2.63 0 00-1.687-.606.6.6 0 00-.606.606v5.936a1.553 1.553 0 001.556 1.556z"
    />
    <path
      fill="#F0F0F0"
      d="M13.7 6.675V.125H2.975a2.628 2.628 0 00-2.62 2.62v27.51a2.628 2.628 0 002.62 2.62h19.65a2.628 2.628 0 002.62-2.62v-19.9h-7.86a3.69 3.69 0 01-3.685-3.68z"
    />
  </svg>
);

export default DocumentIcon;
