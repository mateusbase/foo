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
    <main className="flex min-h-[715px] w-full flex-col items-center gap-6 p-6 lg:h-[560px] lg:min-h-[650px] lg:p-0">
      <div className="w-full">
        <img
          src={src || "assets/images/cancer-center/cancer-center-units.jpg"}
          alt="Imagem de unidade"
          className="block h-[250px] w-full shrink-0 object-cover xl:w-full"
        />
      </div>

      <section className="flex w-full flex-1 flex-col justify-between gap-4 lg:flex-none lg:gap-10">
        <div className="flex items-start gap-2">
          <MarkerCircleIcon className="shrink-0 text-secondary" />
          <h1 className="text-[26px] font-semibold text-primary lg:text-xl xl:text-[26px]">
            {unitName}
          </h1>
        </div>

        <div className="text-lg text-darkGray">
          <p>{address}</p>
          <p>{complement}</p>
          <p className="font-bold">{city}</p>
        </div>

        <div>
          <p className="text-lightGray">{hours}</p>
        </div>
      </section>

      <section className="mt-auto flex w-full flex-col items-center gap-4 lg:mt-0 lg:flex-row lg:justify-center">
        <BaseButton
          className="w-3/5 text-white lg:text-sm xl:text-base"
          color="primary"
        >
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="w-3/5 font-bold lg:text-sm xl:text-base"
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
