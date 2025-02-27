import Image from "next/image";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

interface DownloadCardsProps {
  type: string;
  document: string;
}

const DownloadCards = ({ type, document }: DownloadCardsProps): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-2 rounded-[20px] border border-lightGray py-[19.5px] pl-5 pr-3">
      <Image
        src="/assets/images/transparencia/image 60.svg"
        alt="Ícone de arquivo"
        width={88}
        height={88}
      />
      <div className="flex flex-1 flex-col gap-4 text-sm text-darkGray lg:text-xs xl:text-xl">
        <p className="font-bold">{type}</p>
        <p>{document}</p>
      </div>
      <IoChevronForwardCircleOutline
        className="ml-21 shrink-0 text-primary md:ml-10 lg:ml-2 xl:ml-10"
        size={28.5}
      />
    </div>
  );
};

export default DownloadCards;
