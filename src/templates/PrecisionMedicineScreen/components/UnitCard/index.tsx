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
    <main className="mb-4 flex flex-col items-center gap-7 text-center">
      {image && (
        <img
          src={image}
          alt="Imagem"
          className="mb-3 h-[230px] w-full object-contain lg:w-[426px]"
        />
      )}

      <section className="flex items-center justify-center gap-2">
        <MarkerCircleIcon className="text-secondary" />
        <h1 className="text-2xl font-bold uppercase text-primary">
          {unitName}
        </h1>
      </section>

      <section className="flex flex-col text-base text-zinc-600">
        <p>{address}</p>
        <p>{complement}</p>
        <p className="font-bold">{city}</p>
      </section>

      <section>
        <p className="text-zinc-400">{hours}</p>
      </section>

      <section className="flex w-full flex-col items-center gap-4 lg:w-full lg:flex-row lg:justify-start">
        <BaseButton className="w-full text-white lg:w-[215px]" color="primary">
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="w-full font-lato-bold lg:w-auto"
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
