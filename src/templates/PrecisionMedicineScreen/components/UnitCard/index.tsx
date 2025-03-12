import BaseButton from "@/components/Button";
import { MarkerCircleIcon } from "@/components/Icons";
import { TbCodePlus } from "react-icons/tb";
import { PrecisionMedicineUnitCardProps } from "./type";

const PrecisionMedicineUnitCard = ({
  hours,
  unitName,
  address,
  city,
  complement,
}: PrecisionMedicineUnitCardProps): JSX.Element => {
  return (
    <main className="mb-4 flex h-auto flex-col items-center justify-between gap-9 text-center lg:h-[306px]">
      <div className="flex flex-row items-center justify-start self-start">
        <MarkerCircleIcon className="text-secondary" size={1} />
        <h1 className="ml-2 text-left text-xl font-bold uppercase leading-none text-primary 2xl:text-[26px]">
          {unitName}
        </h1>
      </div>
      <div className="flex grow flex-col self-start text-start">
        <p>{address}</p>
        <p>{complement}</p>
        <p className="font-bold">{city}</p>
      </div>
      <p className="self-start text-start text-zinc-400">{hours}</p>
      <div className="flex w-[70%] flex-col gap-3 lg:w-full lg:flex-row lg:self-start">
        <BaseButton
          className="w-full px-16 text-white lg:w-4/6"
          color="primary"
        >
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="w-full px-4 font-lato-bold lg:w-3/6"
          color="primary"
          variant="bordered"
          startContent={<TbCodePlus size={20} className="shrink-0" />}
        >
          Informações
        </BaseButton>
      </div>
    </main>
  );
};

export default PrecisionMedicineUnitCard;
