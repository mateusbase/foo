import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { ExamsCardProps } from "../../exams";

const ExamsCard = ({ exams }: ExamsCardProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      {exams.map((exam) => (
        <div
          className="mb-4 flex h-[150px] w-[332px] cursor-pointer flex-row items-center justify-between text-wrap rounded-2xl bg-primary px-5 py-6 text-left font-lato-bold text-2xl text-white"
          key={exam.id}
        >
          <span>{exam.name}</span>
          <IoChevronForwardCircleOutline
            className="size-10 shrink-0"
            size={40}
          />
        </div>
      ))}
    </div>
  );
};

export default ExamsCard;
