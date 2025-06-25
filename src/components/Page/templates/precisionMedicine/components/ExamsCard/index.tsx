import Link from "next/link";
import { IoChevronForwardCircleOutline } from "react-icons/io5";

export interface Exam {
  id: string;
  name: string;
  redirectUrl?: string;
}

export interface ExamsCardProps {
  exams: Exam[];
}

const ExamsCard = ({ exams }: ExamsCardProps): JSX.Element => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
      {exams.map((exam) =>
        exam.redirectUrl ? (
          <Link href={exam.redirectUrl} key={exam.id} className="w-full">
            <div className="flex h-[150px] w-full cursor-pointer items-center justify-between rounded-2xl bg-primary px-5 py-6 text-left font-lato-bold text-2xl text-white md:h-[89px]">
              <span className="text-wrap">{exam.name}</span>
              <IoChevronForwardCircleOutline
                className="size-10 shrink-0 md:hidden"
                size={40}
              />
            </div>
          </Link>
        ) : (
          <div
            key={exam.id}
            className="flex h-[150px] w-full cursor-pointer items-center justify-between rounded-2xl bg-primary px-5 py-6 text-left font-lato-bold text-2xl text-white md:h-[89px]"
          >
            <span className="text-wrap">{exam.name}</span>
            <IoChevronForwardCircleOutline
              className="size-10 shrink-0 md:hidden"
              size={40}
            />
          </div>
        ),
      )}
    </div>
  );
};

export default ExamsCard;
