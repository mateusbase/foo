import Image from "next/image";

interface SimpleIconCardProps {
  description: string;
  icon: string;
  textPrimary?: boolean;
}

const SimpleIconCard = ({
  description,
  icon,
  textPrimary = false,
}: SimpleIconCardProps): JSX.Element => {
  return (
    <div className="flex min-h-[170px] w-full flex-row items-center gap-4 rounded-[20px] border border-lightGray px-[22px] md:min-h-[96px] md:px-9 md:py-3 lg:min-h-[123px]">
      <Image
        src={icon}
        alt="Ícone"
        width={70}
        height={70}
        className="shrink-0"
      />
      <p
        className={`flex-1 break-words text-base xl:text-lg ${textPrimary ? "text-primary" : "text-darkGray"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default SimpleIconCard;
