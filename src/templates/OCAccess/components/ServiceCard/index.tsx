import { ServiceCardProps } from "./types";

export default function ServiceCard({
  serviceName,
  icon,
}: ServiceCardProps): JSX.Element {
  return (
    <div className="flex h-28 w-full items-center gap-6 rounded-lg border-1 border-primary p-6">
      <img
        src={`/assets/images/oc-access/${icon}`}
        alt={serviceName}
        className="size-14"
      />
      <p className="text-xl text-primary">{serviceName}</p>
    </div>
  );
}
