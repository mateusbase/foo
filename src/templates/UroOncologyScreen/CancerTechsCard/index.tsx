import Image from "next/image";

interface CancerTechsCardProps {
  title: string;
  description: string;
  icon: string;
}

const CancerTechsCard = ({
  title,
  description,
  icon,
}: CancerTechsCardProps): JSX.Element => {
  return (
    <div className="flex h-[416px] min-h-[150px] w-full flex-col gap-4 rounded-[20px] border border-lightGray p-6 md:min-h-[180px] lg:min-h-[200px] lg:w-[493px]">
      <div className="flex flex-row items-center gap-10">
        <Image
          src={icon}
          alt="Ícone"
          width={72}
          height={72}
          className="shrink-0"
        />
        <span className="justify-items-center text-[26px]">{title}</span>
      </div>
      <p className="my-6 flex-1 break-words text-xl text-darkGray">
        {description}
      </p>
    </div>
  );
};

export default CancerTechsCard;
