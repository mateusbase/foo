import { IoChevronForwardCircleOutline } from "react-icons/io5";
import RoundedPlusIcon from "@/components/Icons/RoundedPlusIcon";
import { ExamsCardProps } from "../../exams";

const PlusCard = ({ exams }: ExamsCardProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 justify-between gap-4 self-center md:grid-cols-2 lg:w-full lg:grid-cols-3 lg:gap-6">
      {exams.map((exam) => (
        <div className="flex h-[150px] w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border border-darkGray bg-transparent px-3 py-6 text-left font-lato-bold text-2xl text-primary lg:h-[129px]">
          <RoundedPlusIcon className="shrink-0" />

          <span className="overflow-none min-w-0 grow text-wrap pr-3 text-left text-xl">
            {exam.name}
          </span>

          <IoChevronForwardCircleOutline className="shrink-0" size={29.5} />
        </div>
      ))}
    </div>
  );
};

export default PlusCard;
