import Image from "next/image";

interface CryotherapyCardProps {
  description: string;
  icon: string;
  textPrimary?: boolean;
}

const CryotherapyCard = ({
  description,
  icon,
  textPrimary = false,
}: CryotherapyCardProps): JSX.Element => {
  return (
    <div className="flex h-[385px] w-full flex-col items-center gap-4 rounded-[20px] border border-lightGray p-5 md:h-[160px] md:flex-row lg:min-h-[220px]">
      <Image
        src={icon}
        alt="Ícone"
        width={130}
        height={130}
        className="shrink-0"
      />
      <p
        className={`mb-4 flex-1 break-words px-9 text-center text-xl md:w-4/5 md:px-0 md:text-left md:text-xl lg:text-sm xl:text-xl ${textPrimary ? "text-primary" : "text-darkGray"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default CryotherapyCard;
