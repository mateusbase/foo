import { TbCircleChevronRight } from "react-icons/tb";

interface CancerTreatmentCardProps {
  title: string;
  description: string;
}

const CancerTreatmentCard = ({
  title,
  description,
}: CancerTreatmentCardProps): JSX.Element => {
  return (
    <div className="flex h-[397px] w-full flex-col gap-4 rounded-[20px] border border-lightGray p-6 md:min-h-[180px] lg:min-h-[200px]">
      <div className="flex flex-row items-center gap-10">
        <span className="justify-items-center text-[26px]">{title}</span>
      </div>
      <p className="mt-6 flex-1 break-words text-xl text-darkGray">
        {description}
      </p>
      <TbCircleChevronRight className="mb-6 size-8 shrink-0 text-primary lg:mb-[18px]" />
    </div>
  );
};

export default CancerTreatmentCard;
