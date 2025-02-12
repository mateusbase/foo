import BaseButton from "@/components/Button";
import { useRouter } from "next/router";
import { MarkerCircleIcon } from "@/components/Icons";
import { UnitCardProps } from "../../interfaces";

export default function UnitsCard({
  unitName,
  address,
  complement,
  city,
  hours,
  src,
}: UnitCardProps): JSX.Element {
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
      },
    });
  };

  return (
    <main className="flex min-h-[715px] w-full flex-col items-center justify-between gap-6 p-6">
      <div className="w-full">
        <img
          src={src || "assets/images/cancer-center/cancer-center-units.jpg"}
          alt="Imagem de unidade"
          className="block h-[250px] w-full object-cover"
        />
      </div>

      <section className="flex min-h-[220px] w-full grow flex-col gap-7">
        <div className="flex items-center gap-2">
          <MarkerCircleIcon className="text-secondary" />
          <h1 className="text-[26px] font-semibold text-primary">{unitName}</h1>
        </div>

        <div className="mt-4 text-lg text-darkGray">
          <p>{address}</p>
          <p>{complement}</p>
          <p className="font-bold">{city}</p>
        </div>

        <div className="mt-4">
          <p className="text-lightGray">{hours}</p>
        </div>
      </section>

      <section className="mt-auto flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-center">
        <BaseButton className="w-1/2 text-white" color="primary">
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="w-1/2 font-bold"
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
