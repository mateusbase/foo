import BaseButton from "@/components/Button";
import { MarkerCircleIcon } from "@/components/Icons";
import { TbCodePlus } from "react-icons/tb";
import { PrecisionMedicineUnitCardProps } from "./type";

const PrecisionMedicineUnitCard = ({
  hours,
  unitName,
  image,
  address,
  city,
  complement,
}: PrecisionMedicineUnitCardProps): JSX.Element => {
  return (
    <main className="mb-4 flex flex-col items-center gap-7">
      {image && (
        <img
          src={image}
          alt="Imagem"
          className="mb-3 h-[230px] w-full object-contain"
        />
      )}

      <section className="flex items-center gap-2">
        <MarkerCircleIcon className="text-secondary" />
        <h1 className="text-left text-2xl font-bold uppercase text-primary">
          {unitName}
        </h1>
      </section>

      <section className="flex flex-col items-center text-base text-zinc-600">
        <p>{address}</p>
        <p>{complement}</p>
        <p className="font-bold">{city}</p>
      </section>

      <section className="text-center">
        <p className="text-zinc-400">{hours}</p>
      </section>

      <section className="flex w-60 flex-col gap-4">
        <BaseButton className="text-white" color="primary">
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="font-lato-bold"
          color="primary"
          variant="bordered"
          startContent={<TbCodePlus size={20} />}
        >
          Informações
        </BaseButton>
      </section>
    </main>
  );
};

export default PrecisionMedicineUnitCard;
