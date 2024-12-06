import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { ExamsCardProps } from "../../exams";

interface ExtendedExamsCardProps extends ExamsCardProps {
  isGenomics?: boolean;
}

const ExamsCard = ({
  exams,
  isGenomics,
}: ExtendedExamsCardProps): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-center lg:grid lg:w-full lg:grid-flow-col lg:justify-center lg:gap-x-8 ${isGenomics ? "lg:grid-rows-2" : "lg:grid-rows-3"}`}
    >
      {exams.map((exam) => (
        <div
          className="mb-4 flex h-[150px] w-[332px] cursor-pointer flex-row items-center justify-between text-wrap rounded-2xl bg-primary px-5 py-6 text-left font-lato-bold text-2xl text-white lg:h-[89px] lg:w-[683px] lg:text-2xl"
          key={exam.id}
        >
          <span>{exam.name}</span>
          <IoChevronForwardCircleOutline
            className="size-10 shrink-0 lg:hidden"
            size={40}
          />
        </div>
      ))}
    </div>
  );
};

export default ExamsCard;
