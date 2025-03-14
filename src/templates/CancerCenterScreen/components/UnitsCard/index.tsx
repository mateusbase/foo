import BaseButton from "@/components/Button";
import { useRouter } from "next/router";
import { MarkerCircleIcon } from "@/components/Icons";
import { UnitsCardProps } from "./types";

export default function UnitsCard({
  unitName,
  address,
  complement,
  phone,
  city,
  hours,
  width = "452px",
}: UnitsCardProps): JSX.Element {
  const router = useRouter();

  const handleUnitClick = (): void => {
    router.push({
      pathname: `/encontre-uma-unidade/${unitName.replace(/\s+/g, "-").toLowerCase()}`,
      query: {
        name: unitName,
        address,
        complement,
        phone,
        city,
        hours,
      },
    });
  };

  return (
    <main
      // eslint-disable-next-line tailwindcss/classnames-order
      className={`flex flex-col justify-between gap-8 max-w-[${width}]`}
    >
      <section>
        <section className="flex items-center gap-1">
          <MarkerCircleIcon className="text-secondary" />
          <h1 className="ml-2 text-[26px] text-primary">{unitName}</h1>
        </section>

        <section className="mt-6 flex flex-col text-lg text-darkGray">
          <p>{address}</p>
          <p>{complement}</p>
          <p>{phone}</p>
          <p className="font-bold">{city}</p>
        </section>

        <section className="mt-8">
          <p className="text-lightGray">{hours}</p>
        </section>
      </section>

      <section className="flex flex-col items-center gap-2 lg:mr-[52px] lg:flex-row">
        <BaseButton className="w-3/5 text-white lg:w-[215px]" color="primary">
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="w-3/5 font-bold lg:w-44"
          color="primary"
          variant="bordered"
          onClick={handleUnitClick}
        >
          [+] informações
        </BaseButton>
      </section>
    </main>
  );
}
