import { HiOutlineMapPin } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { TbCodePlus } from "react-icons/tb";
import BaseButton from "@/components/Button";
import { useRouter } from "next/router";
import { UnitsCardProps } from "./types";

export default function UnitsCard({
  unitName,
  address,
  complement,
  city,
  hours,
  specialties = [],
}: UnitsCardProps): JSX.Element {
  const router = useRouter();

  const handleUnitClick = (): void => {
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
    <main className="flex flex-col justify-between gap-8">
      <section>
        <section className="flex items-center gap-1">
          <HiOutlineMapPin className="-ml-2 text-secondary" size={40} />
          <h1 className="text-2xl font-bold uppercase text-primary">
            {unitName}
          </h1>
        </section>

        <section className="mt-8 flex flex-col text-base text-zinc-600">
          <p>{address}</p>
          <p>{complement}</p>
          <p className="font-bold">{city}</p>
        </section>

        <section className="mt-8">
          <p className="text-zinc-400">{hours}</p>
        </section>

        <section className="mt-8 text-primary">
          {specialties.map((specialty) => (
            <div key={specialty} className="flex items-center">
              <RiArrowRightSLine />
              <p>{specialty}</p>
            </div>
          ))}
        </section>
      </section>

      <section className="flex gap-2">
        <BaseButton className="w-64 text-white" color="primary">
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="font-bold"
          color="primary"
          variant="bordered"
          startContent={<TbCodePlus size={20} />}
          onClick={handleUnitClick}
        >
          Informações
        </BaseButton>
      </section>
    </main>
  );
}
