import Image from "next/image";

interface CancerCardMockProps {
  description: string;
  icon: string;
}

const CancerCard = ({
  description,
  icon,
}: CancerCardMockProps): JSX.Element => {
  return (
    <div className="mt-4 flex min-h-[97px] flex-row items-center gap-4 rounded-[20px] border border-lightGray py-[53.5px] pl-5 pr-6 md:my-4 md:mr-4 md:min-h-[118px] md:py-[25.5px] lg:my-0">
      <Image
        src={icon}
        alt="Ícone"
        width={70}
        height={70}
        className="shrink-0"
      />
      <p className="text-xl text-primary md:text-2xl">{description}</p>
    </div>
  );
};

export default CancerCard;
