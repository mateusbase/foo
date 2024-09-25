import { HiOutlineMapPin } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { TbCodePlus } from "react-icons/tb";
import BaseButton from "@/components/Button";
import { FaLocationDot } from "react-icons/fa6";
import { UnitsCardProps } from "./types";

export default function UnitsCardMobile({
  id,
  unitName,
  address,
  complement,
  city,
  hours,
  specialties,
}: UnitsCardProps): JSX.Element {
  return (
    <div className="flex w-full flex-col justify-between gap-2 rounded-xl border-1 border-primary p-4">
      <div className="flex items-center gap-1">
        <FaLocationDot className="-ml-2 text-primary-foreground" size={30} />
        <h1 className="text-sm font-bold uppercase text-primary">{unitName}</h1>
      </div>

      <section className="flex flex-col text-sm text-zinc-600">
        <p>{address}</p>
        <p>{city}</p>
      </section>
    </div>
  );
}
