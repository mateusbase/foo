import { Image } from "@heroui/react";

export interface IUnitsAndTreatmentCard {
  icon: string;
  text: string;
  title?: string;
}

const UnitsAndTreatmentCard = ({
  icon,
  text,
  title,
}: IUnitsAndTreatmentCard): JSX.Element => {
  return (
    <div className="flex h-[201px] w-[420px] flex-row items-center gap-4 rounded-[20px] border border-lightGray py-[35.5px] pl-6 pr-9">
      <Image src={icon} alt={text} className="" />
      <div className="text-left text-lightGray">
        {title && <span className="text-2xl font-bold">{title}</span>}
        <p className="text-2xl font-bold">{text}</p>
      </div>
    </div>
  );
};
export default UnitsAndTreatmentCard;
