import { useRouter } from "next/router";
import { TbCodePlus } from "react-icons/tb";
import { Button } from "@/components/Button";
import { MarkerCircleIcon } from "@/components/Icons";
import { ChevronRight } from "lucide-react";
import { UnitsCardProps } from "../types";

export default function UnitsCard({
  unitName,
  address,
  complement,
  city,
  day,
  hours,
  specialties = [],
  path,
  appointmentPath,
  segmentation,
  moreInfoButtonText,
  actionButton,
}: UnitsCardProps): JSX.Element {
  const router = useRouter();

  const handleUnitClick = (): void => {
    router.push(path);
  };

  const handleAppointmentClick = (): void => {
    router.push(appointmentPath);
  };

  return (
    <main className="mb-5 flex flex-col justify-between gap-8">
      <section>
        {segmentation.isPartner && (
          <p className="mb-8 flex h-8 w-36 items-center justify-center rounded-[5px] bg-purpleDark text-center text-xs text-white">
            UNIDADE PARCEIRA
          </p>
        )}

        <section className="flex items-center gap-3">
          <MarkerCircleIcon className="text-secondary" />

          <h1 className="text-2xl font-bold uppercase text-primary">
            {unitName}
          </h1>
        </section>

        <section className="mt-8 flex flex-col text-base text-zinc-600">
          <span>{address}</span>

          <span>{complement}</span>

          <span className="font-bold">{city}</span>
        </section>

        <section className="mt-8 flex gap-1">
          <span className="text-lightGray">{day}</span>
          <span className="text-lightGray">{hours}</span>
        </section>

        <section className="mt-8 text-primary">
          {specialties &&
            specialties.map((specialty) => (
              <div key={specialty} className="flex items-center">
                <ChevronRight size={20} />

                <span>{specialty}</span>
              </div>
            ))}
        </section>
      </section>

      <section className="flex gap-2">
        <Button className="w-64" onClick={handleAppointmentClick}>
          {actionButton}
        </Button>

        <Button
          className="font-bold"
          variant="outlined"
          onClick={handleUnitClick}
        >
          <TbCodePlus size={20} />
          {moreInfoButtonText}
        </Button>
      </section>
    </main>
  );
}
