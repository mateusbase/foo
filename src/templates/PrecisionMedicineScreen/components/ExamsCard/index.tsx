import { IoChevronForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";
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
      className={`flex flex-col items-center self-center lg:grid lg:w-full lg:grid-cols-2 lg:gap-8 ${
        isGenomics ? "lg:grid-rows-2" : "lg:grid-rows-3"
      }`}
    >
      {exams.map((exam) =>
        exam.redirectUrl ? (
          <Link href={exam.redirectUrl} key={exam.id} className="w-full">
            <div className="mb-4 flex h-[150px] w-full cursor-pointer items-center justify-between rounded-2xl bg-primary px-5 py-6 text-left font-lato-bold text-2xl text-white lg:h-[89px]">
              <span className="truncate">{exam.name}</span>
              <IoChevronForwardCircleOutline
                className="size-10 shrink-0 lg:hidden"
                size={40}
              />
            </div>
          </Link>
        ) : (
          <div
            className="mb-4 flex h-[150px] w-full cursor-pointer items-center justify-between rounded-2xl bg-primary px-5 py-6 text-left font-lato-bold text-2xl text-white lg:h-[89px]"
            key={exam.id}
          >
            <span className="truncate">{exam.name}</span>
            <IoChevronForwardCircleOutline
              className="size-10 shrink-0 lg:hidden"
              size={40}
            />
          </div>
        ),
      )}
    </div>
  );
};

export default ExamsCard;
