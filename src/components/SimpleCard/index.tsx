import { TbCircleChevronRight } from "react-icons/tb";

interface SimpleCardProps {
  title: string;
  description: string;
  hasChevron?: boolean;
  textPrimary?: boolean;
}

const SimpleCard = ({
  title = "",
  description = "",
  hasChevron = false,
  textPrimary = false,
}: SimpleCardProps): JSX.Element => {
  return (
    <div className="flex min-h-[314px] w-full flex-col justify-between gap-6 rounded-2xl border border-darkGray bg-white px-[27px] pt-6 md:min-h-[314px] md:w-1/2 lg:w-1/4">
      <div className="flex grow flex-col">
        <h1
          className={`mb-6 text-2xl ${textPrimary ? "text-primary" : "text-darkGray"}`}
        >
          {title}
        </h1>
        <p className="text-lightGray">{description}</p>
      </div>

      {hasChevron && (
        <TbCircleChevronRight className="mb-4 size-6 shrink-0 text-primary" />
      )}
    </div>
  );
};

export default SimpleCard;
