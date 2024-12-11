import { RiMentalHealthLine } from "react-icons/ri";
import { PalliativeCareCardProps } from "./types";

export default function PalliativeCareCard({
  serviceName,
  iconCard = <RiMentalHealthLine size={34} />,
}: PalliativeCareCardProps): JSX.Element {
  return (
    <div className="flex min-h-44 w-full items-center rounded-2xl border-1 border-lightGray py-2 pl-6 md:min-h-28">
      <div className="flex items-center gap-4">
        <div className="flex size-14 min-w-14 items-center justify-center rounded-full bg-primary-foreground text-white">
          {iconCard}
        </div>
        <div className="text-lg leading-tight text-darkGray 2xl:text-xl">
          {serviceName}
        </div>
      </div>
    </div>
  );
}
