type BreadcrumbBackIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
};

const BreadcrumbBackIcon = ({
  size = 1,
  color = "text-primary",
  className = "",
  ...props
}: BreadcrumbBackIconProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24 * size}
    height={24 * size}
    fill="none"
    viewBox="0 0 24 24"
    className={`${color} ${className}`}
    {...props}
  >
    <path
      fill="#00B6AD"
      d="M12 .335a11.665 11.665 0 1 0 0 23.33 11.665 11.665 0 0 0 0-23.33m2.435 16.213a1.087 1.087 0 0 1-.35 1.765 1.088 1.088 0 0 1-1.181-.24l-5.272-5.289a1.08 1.08 0 0 1 .034-1.492l5.35-5.367a1.084 1.084 0 0 1 1.53 1.535L9.955 12z"
    />
  </svg>
);

export default BreadcrumbBackIcon;
