import { Button } from "@nextui-org/react";
import { ButtonRootProps } from "./types";

export default function ButtonRoot({
  className,
  onClick,
  children,
  ...attributes
}: ButtonRootProps): JSX.Element {
  return (
    <Button {...attributes} className={className} onClick={onClick}>
      {children}
    </Button>
  );
}
