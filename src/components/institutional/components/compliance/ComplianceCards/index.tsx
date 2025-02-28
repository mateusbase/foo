import Image from "next/image";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

interface ComplianceProps {
  title: string;
  icon: string;
}

const ComplianceCards = ({ title, icon }: ComplianceProps): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-2 rounded-[20px] border border-lightGray py-[19.5px] pl-5 pr-3 lg:h-[118] lg:w-[756px]">
      <Image
        src="/assets/images/compliance/compliance-icon.svg"
        alt="Ícone de arquivo"
        width={88}
        height={88}
      />
      <div className="flex flex-1 flex-col gap-4 text-xl text-primary md:text-2xl lg:text-xs xl:text-xl">
        <p>{title}</p>
      </div>
      <IoChevronForwardCircleOutline
        className="ml-21 shrink-0 text-primary md:ml-10 lg:ml-2 xl:ml-10"
        size={29.25}
      />
    </div>
  );
};

export default ComplianceCards;
