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
    <main className="flex min-h-[380px] w-full grow flex-col gap-4 rounded-lg md:mt-[84px] lg:mt-[61px] lg:min-h-[320px]">
      <section className="flex w-full flex-col gap-6">
        <div className="flex items-center gap-2">
          <MarkerCircleIcon className="shrink-0 text-secondary" />
          <h1 className="flex min-h-[62px] items-center text-[22px] font-semibold text-primary lg:text-lg xl:text-[22px]">
            {unitName}
          </h1>
        </div>

        <div className="text-lg text-darkGray lg:text-base xl:text-lg">
          <p>{address}</p>
          <p>{complement}</p>
          <p className="font-bold">{city}</p>
        </div>

        <p className="text-lightGray">{hours}</p>
      </section>

      <section className="mb-7 mt-[38px] flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-center">
        <BaseButton
          className="w-[215px] text-white lg:w-[215px] lg:text-sm xl:text-base"
          color="primary"
        >
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="w-[215px] font-bold lg:w-[176px] lg:text-sm xl:text-base"
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
