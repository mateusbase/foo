import { TbCircleChevronRight } from "react-icons/tb";

interface SimpleCardProps {
  title: string;
  description: string;
  hasChevron?: boolean;
  textPrimary?: boolean;
  icon?: string;
}

const SimpleCard = ({
  title = "",
  description = "",
  hasChevron = false,
  textPrimary = false,
  icon,
}: SimpleCardProps): JSX.Element => {
  return (
    <div className="flex min-h-[314px] w-full flex-col justify-between gap-6 rounded-2xl border border-darkGray bg-white px-[27px] pt-6 md:min-h-[314px] lg:w-1/4 lg:pb-11">
      <div className="flex grow flex-col">
        <div className="flex flex-row items-center gap-6">
          {icon && (
            <img src={icon} alt={title} className="mb-6 size-16 shrink-0" />
          )}
          <h1
            className={`mb-6 text-2xl ${textPrimary ? "text-primary" : "text-darkGray"}`}
          >
            {title}
          </h1>
        </div>
        <p className="text-left text-lightGray">{description}</p>
      </div>

      {hasChevron && (
        <TbCircleChevronRight className="mb-4 size-6 shrink-0 text-primary" />
      )}
    </div>
  );
};

export default SimpleCard;
