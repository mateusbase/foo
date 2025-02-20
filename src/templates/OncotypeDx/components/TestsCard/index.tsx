import Image from "next/image";

interface TestsCardProps {
  description: string;
  icon: string;
  alt: string;
}

const TestsCard = ({ description, icon, alt }: TestsCardProps): JSX.Element => {
  return (
    <div className="flex min-h-[150px] flex-row items-center gap-5 rounded-[20px] border border-lightGray py-[16px] pl-5 pr-6 md:my-4 md:py-[25.5px] lg:my-0">
      <Image src={icon} alt={alt} width={64} height={64} className="shrink-0" />
      <p className="text-xl text-primary md:text-2xl">{description}</p>
    </div>
  );
};

export default TestsCard;
