import { InformationCardProps } from "./types";

export default function InformationCard({
  background,
  children,
}: InformationCardProps): JSX.Element {
  return (
    <div
      className={`border-purpleMedium ${background ? "bg-purpleMedium" : "bg-white"} min-h-72 w-full content-center justify-center rounded-xl border-3 p-16`}
    >
      {children}
    </div>
  );
}
