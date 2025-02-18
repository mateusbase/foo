import Image from "next/image";

interface BenefitsCardProps {
  description: string;
  icon: string;
  key: number;
}

const BenefitsCard = ({
  description,
  icon,
  key,
}: BenefitsCardProps): JSX.Element => {
  return (
    <div
      key={key}
      className="flex h-[190px] flex-row items-center gap-4 rounded-[20px] border border-lightGray py-[53.5px] pl-5 pr-6 md:my-2 md:h-[110px] md:py-[25.5px] lg:my-0 lg:h-[143px]"
    >
      <Image
        src={icon}
        alt="Ícone"
        width={70}
        height={70}
        className="shrink-0"
      />
      <p className="text-xl text-darkGray md:text-base">{description}</p>
    </div>
  );
};

export default BenefitsCard;
