import Image from "next/image";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

export interface PlusCardExam {
  image: {
    alt: string;
    width: number;
    key: string;
    url: string;
    height: number;
  };
  name: string;
  link: {
    external: boolean;
    url: string;
    openOnNewTab?: boolean;
  };
}

export interface PlusCardProps {
  exams: PlusCardExam[];
}

const PlusCard = ({ exams }: PlusCardProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 justify-between gap-4 self-center md:grid-cols-2 lg:w-full lg:grid-cols-3 lg:gap-6">
      {exams.map((exam) => (
        <a
          key={exam.name}
          href={exam.link.url}
          target={exam.link.openOnNewTab ? "_blank" : "_self"}
          rel={exam.link.external ? "noopener noreferrer" : undefined}
          className="flex h-[150px] w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border border-darkGray bg-transparent px-3 py-6 text-left font-lato-bold text-2xl text-primary lg:h-[129px]"
        >
          <div className="flex items-center justify-center">
            <Image
              src={exam.image.url}
              alt={exam.image.alt || exam.name}
              width={exam.image.width}
              height={exam.image.height}
              className="size-14 object-contain"
            />
          </div>

          <span className="overflow-none min-w-0 grow text-wrap pr-3 text-left text-xl">
            {exam.name}
          </span>

          <IoChevronForwardCircleOutline className="shrink-0" size={29.5} />
        </a>
      ))}
    </div>
  );
};

export default PlusCard;
