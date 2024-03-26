import { CircularProgress } from "@nextui-org/react";
import { ButtonIconProps } from "./types";

export default function ButtonIcon({
  children,
  loading,
}: ButtonIconProps): JSX.Element {
  return (
    <div>
      {!loading ? (
        children
      ) : (
        <CircularProgress
          className="text-primary"
          size="sm"
          aria-label="Loading..."
        />
      )}
    </div>
  );
}
