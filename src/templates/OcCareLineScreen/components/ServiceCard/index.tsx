import { RiMentalHealthLine } from "react-icons/ri";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  serviceName,
  iconCard = <RiMentalHealthLine size={34} />,
}: ServiceCardProps): JSX.Element {
  return (
    <div className="flex w-full items-center rounded-2xl border-1 border-lightGray px-6 py-3">
      <div className="flex items-center gap-4">
        <div className="flex size-14 min-w-14 items-center justify-center rounded-full bg-primary-foreground text-white">
          {iconCard}
        </div>
        <div className="text-xl text-darkGray">{serviceName}</div>
      </div>
    </div>
  );
}
