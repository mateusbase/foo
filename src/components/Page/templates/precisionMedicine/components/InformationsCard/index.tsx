import { ReactNode } from "react";

export interface InformationCardProps {
  background?: boolean;
  children: ReactNode;
}

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
      className={`border-purpleMedium ${background ? "bg-purpleMedium" : "bg-white"} min-h-72 w-full place-content-center rounded-xl border-2 p-4 md:p-16 ${className || ""}`}
    >
      {children}
    </div>
  );
}
