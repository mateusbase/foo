import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { UnitsCardProps } from "../types";

export default function UnitsCardMobile({
  unitName,
  address,
  city,
  path,
  segmentation,
}: UnitsCardProps): JSX.Element {
  return (
    <Link href={path}>
      <div className="flex min-h-24 w-full flex-col justify-between gap-2 rounded-xl border border-primary p-4">
        {segmentation.isPartner && (
          <div className="max-w-40">
            <p className="flex items-center justify-center rounded-full bg-purpleDark px-3 py-1 text-center text-xs text-white">
              UNIDADE PARCEIRA
            </p>
          </div>
        )}

        <div className="flex items-center gap-1">
          <FaLocationDot className="-ml-2 text-primary-foreground" size={30} />

          <h1 className="text-sm font-bold uppercase text-primary">
            {unitName}
          </h1>
        </div>

        <section className="flex flex-col text-sm text-zinc-600">
          <span>{address}</span>

          <span>{city}</span>
        </section>
      </div>
    </Link>
  );
}
