import { IoIosArrowDropright } from "react-icons/io";
import { CancerCardProps } from "./types";

export default function CancerCard({
  description,
  name,
  icon,
}: CancerCardProps): JSX.Element {
  return (
    <div className="flex h-[337px] flex-col justify-center gap-4 rounded-2xl border-1 border-lightGray p-8">
      <div className="flex items-center gap-4">
        <div className="shrink-0">{icon}</div>
        <p className="text-2xl text-darkGray">{name}</p>
      </div>
      <p className="text-xl text-darkGray">{description}</p>
      <IoIosArrowDropright size={29} className="text-primary" />
    </div>
  );
}
