import Image from "next/image";
import { TbCircleChevronRight } from "react-icons/tb";

interface CancerTypesCardProps {
  title: string;
  description: string;
  icon: string;
  textPrimary?: boolean;
}

const CancerTypesCard = ({
  title,
  description,
  icon,
  textPrimary = false,
}: CancerTypesCardProps): JSX.Element => {
  return (
    <div className="flex min-h-[150px] w-full flex-col gap-4 rounded-[20px] border border-lightGray p-6 md:min-h-[180px] lg:min-h-[200px]">
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
      <p
        className={`mt-6 flex-1 break-words text-xl ${textPrimary ? "text-primary" : "text-darkGray"}`}
      >
        {description}
      </p>
      <TbCircleChevronRight className="mb-6 size-8 shrink-0 text-primary lg:mb-[18px]" />
    </div>
  );
};

export default CancerTypesCard;
