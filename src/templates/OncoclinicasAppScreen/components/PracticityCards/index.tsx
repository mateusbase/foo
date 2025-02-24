import { Image } from "@heroui/react";

interface PracticityCardProps {
  title: string;
  description: string;
  textPrimary?: boolean;
  icon?: string;
}

const PracticityCard = ({
  title = "",
  description = "",
  textPrimary = false,
  icon,
}: PracticityCardProps): JSX.Element => {
  return (
    <div className="flex h-[257px] w-full flex-col justify-between gap-6 rounded-2xl border border-darkGray bg-white px-[27px] pt-6 md:max-h-[201px] lg:max-h-[220px] lg:pb-11">
      <div className="flex grow flex-col">
        <div className="mb-6 flex min-h-[80px] items-center gap-6">
          {icon && (
            <div className="size-[80px] shrink-0">
              <Image
                src={icon}
                radius="none"
                alt={title}
                className="size-full object-contain"
              />
            </div>
          )}
          <h1
            className={`text-2xl leading-tight ${textPrimary ? "text-primary" : "text-darkGray"}`}
          >
            {title}
          </h1>
        </div>
        <p className="mt-4 text-center text-xl text-lightGray md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PracticityCard;
