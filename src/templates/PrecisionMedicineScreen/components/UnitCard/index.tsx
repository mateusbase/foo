import BaseButton from "@/components/Button";
import { MarkerCircleIcon } from "@/components/Icons";
import { TbCodePlus } from "react-icons/tb";
import Image from "next/image";
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
    <main className="mb-4 flex h-[510px] flex-col items-center gap-3 text-center">
      {image && (
        <Image
          src={image}
          alt="Imagem"
          width={423}
          height={230}
          quality={100}
          className="mb-3 h-[230px] w-full object-cover"
        />
      )}
      <div className="flex flex-row items-center justify-start self-start">
        <MarkerCircleIcon className="text-secondary" size={1} />
        <h1 className="ml-2 text-left font-bold uppercase leading-none text-primary 2xl:text-[26px]">
          {unitName}
        </h1>
      </div>
      <div className="mt-2 flex min-h-[120px] grow flex-col justify-between self-start text-start">
        <p>{address}</p>
        <p>{complement}</p>
        <p className="font-bold">{city}</p>
        <p className="mt-6 text-start text-zinc-400">{hours}</p>
      </div>
      <div className="mt-auto flex w-full flex-row gap-3 self-start">
        <BaseButton className="w-full text-white lg:w-4/6" color="primary">
          Agende uma consulta
        </BaseButton>

        <BaseButton
          className="w-full font-lato-bold lg:w-3/6"
          color="primary"
          variant="bordered"
          startContent={<TbCodePlus size={20} />}
        >
          Informações
        </BaseButton>
      </div>
    </main>
  );
};

export default PrecisionMedicineUnitCard;
