import { IoChevronForwardCircleOutline } from "react-icons/io5";
import RoundedPlusIcon from "@/components/Icons/RoundedPlusIcon";
import { ExamsCardProps } from "../../exams";

const PlusCard = ({ exams }: ExamsCardProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      {exams.map((exam) => (
        <div
          className="mb-4 flex h-[150px] w-[342px] cursor-pointer flex-row items-center justify-between gap-4 text-wrap rounded-2xl border-1 border-darkGray bg-transparent px-5 py-6 text-left font-lato-bold text-2xl text-primary"
          key={exam.id}
        >
          <div className="shrink-0">
            <RoundedPlusIcon />
          </div>

          <span className="min-w-0 pr-3 text-left text-xl">{exam.name}</span>

          <IoChevronForwardCircleOutline
            className="size-10 shrink-0"
            size={60}
          />
        </div>
      ))}
    </div>
  );
};

export default PlusCard;
