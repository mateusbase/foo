import Image from "next/image";

interface SimpleIconCardProps {
  description: string;
  icon: string;
}

const SimpleIconCard = ({
  description,
  icon,
}: SimpleIconCardProps): JSX.Element => {
  return (
    <div className="flex min-h-[150px] w-full flex-row items-center gap-4 rounded-[20px] border border-lightGray p-6 md:min-h-[180px] lg:min-h-[200px]">
      <Image
        src={icon}
        alt="Ícone"
        width={70}
        height={70}
        className="shrink-0"
      />
      <p className="flex-1 break-words text-xl text-darkGray md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default SimpleIconCard;
