import { LuArrowUpRight } from "react-icons/lu";
import BaseButton from "../Button";

export default function NewsInformationCard({
  options,
}: NewsInformationCardProps): JSX.Element {
  const { title, date, description, image } = options;

  return (
    <div className="mx-auto flex w-full gap-4 md:flex-col lg:flex-row lg:gap-8">
      <div className="h-auto shrink-0 md:max-w-[322px] lg:max-w-[812px]">
        <img
          src={image}
          alt="ASCO Annual Meeting 2024"
          className="size-full object-cover"
        />
      </div>

      <div className="flex w-full flex-col justify-start">
        <div>
          <BaseButton className="text-sm" variant="bordered" color="secondary">
            <LuArrowUpRight />
            Inovação & Oncologia
          </BaseButton>
        </div>

        <h1 className="mt-8 text-left font-lato-light text-xl text-darkGray lg:text-[48px] lg:leading-[48px]">
          {title}
        </h1>

        <p className="mt-4 text-left text-sm font-normal text-primary lg:text-[16px] lg:leading-[19px]">
          {date}
        </p>

        <p className="mt-14 text-left text-sm font-medium text-darkGray lg:text-xl lg:leading-[27px]">
          {description}
        </p>
      </div>
    </div>
  );
}
