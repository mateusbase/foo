import { HiOutlineMapPin } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { TbCodePlus } from "react-icons/tb";
import { Button } from "@nextui-org/button";
import { UnitsCardProps } from "./types";

export default function UnitsCard({
  id,
  unitName,
  address,
  complement,
  city,
  hours,
  specialties,
}: UnitsCardProps): JSX.Element {
  return (
    <main className="flex flex-col justify-between gap-8">
      <section>
        <section className="flex items-center gap-1">
          <HiOutlineMapPin color="#6328B4" className="-ml-2" size={40} />
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
            <div key={id} className="flex items-center">
              <RiArrowRightSLine />
              <p>{specialty}</p>
            </div>
          ))}
        </section>
      </section>

      <section className="flex gap-2">
        <Button className="text-white" color="primary">
          Agende uma consulta
        </Button>
        <Button
          className="font-bold"
          color="primary"
          variant="bordered"
          startContent={<TbCodePlus size={20} />}
        >
          Informações
        </Button>
      </section>
    </main>
  );
}
