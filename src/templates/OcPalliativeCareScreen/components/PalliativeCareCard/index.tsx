import Image from "next/image";
import { PalliativeCareCardProps } from "./types";

export default function PalliativeCareCard({
  serviceName,
  iconCard,
}: PalliativeCareCardProps): JSX.Element {
  return (
    <div className="flex min-h-44 w-full items-center rounded-2xl border-1 border-lightGray py-4 pl-6 pr-3 md:min-h-28">
      <div className="flex items-center gap-4">
        <div className="flex size-14 min-w-14 items-center justify-center rounded-full bg-primary-foreground text-white">
          <Image src={iconCard} alt="Ícone" width={60} height={60} />
        </div>
        <div className="text-base leading-tight text-darkGray 2xl:text-lg">
          {serviceName}
        </div>
      </div>
    </div>
  );
}
