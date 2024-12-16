import { InformationCardProps } from "./types";

interface ExtendedInformationCardProps extends InformationCardProps {
  className?: string;
}

export default function InformationCard({
  background,
  children,
  className,
}: ExtendedInformationCardProps): JSX.Element {
  return (
    <div
      className={`border-purpleMedium ${background ? "bg-purpleMedium" : "bg-white"} min-h-72 w-full content-center justify-center rounded-xl border-3 p-4 md:p-16 ${className || ""}`}
    >
      {children}
    </div>
  );
}
