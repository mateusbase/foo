import Image from "next/image";

interface ReasonsCardProps {
  description: string;
  icon: string;
  alt: string;
}

const ReasonsCard = ({
  description,
  icon,
  alt,
}: ReasonsCardProps): JSX.Element => {
  return (
    <div className="flex h-[290px] flex-row items-center gap-5 rounded-[20px] border border-lightGray py-6 pl-5 pr-6 md:my-4 md:h-[125px] md:py-[25.5px] lg:my-0 lg:h-[230px] xl:h-[175px]">
      <Image src={icon} alt={alt} width={60} height={60} className="shrink-0" />
      <p className="text-base text-darkGray lg:text-sm xl:text-base">
        {description}
      </p>
    </div>
  );
};

export default ReasonsCard;
