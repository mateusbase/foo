import { FaLocationDot } from "react-icons/fa6";
import { Link as NextUILink } from "@heroui/react";
import { useRouter } from "next/router";
import { UnitsCardProps } from "./types";

export default function UnitsCardMobile({
  unitName,
  address,
  complement,
  city,
  hours,
  specialties = [],
  isPartner = false,
}: UnitsCardProps): JSX.Element {
  const router = useRouter();

  const handleUnitClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    router.push({
      pathname: `/encontre-uma-unidade/${unitName.replace(/\s+/g, "-").toLowerCase()}`,
      query: {
        name: unitName,
        address,
        complement,
        city,
        hours,
        specialties: specialties.join(","),
      },
    });
  };

  return (
    <NextUILink onClick={handleUnitClick} href="#" style={{ display: "block" }}>
      <div className="relative flex min-h-24 w-full flex-col justify-between gap-2 rounded-xl border-1 border-primary p-4">
        {isPartner && (
          <p className="absolute -top-0 left-0 flex items-center justify-center rounded-full bg-purpleDark px-3 py-1 text-center text-xs text-white">
            UNIDADE PARCEIRA
          </p>
        )}
        <div className="mt-4 flex items-center gap-1">
          <FaLocationDot className="-ml-2 text-primary-foreground" size={30} />
          <h1 className="text-sm font-bold uppercase text-primary">
            {unitName}
          </h1>
        </div>

        <section className="flex flex-col text-sm text-zinc-600">
          <p>{address}</p>
          <p>{city}</p>
        </section>
      </div>
    </NextUILink>
  );
}
