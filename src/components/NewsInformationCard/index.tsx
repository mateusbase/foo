import BaseButton from "../Button";

export default function NewsInformationCard({
  options
}: NewsInformationCardProps): JSX.Element {

  const { title, date, description, image } = options;

  return (
    <div className="mx-auto flex w-full gap-8">
      <div className="h-auto w-[812px] shrink-0">
        <img
          src={image}
          alt="ASCO Annual Meeting 2024"
          className="size-full rounded-md object-cover"
        />
      </div>

      <div className="flex w-full flex-col justify-start">

        <div>
          <BaseButton
            children="Inovação & Oncologia"
            variant="bordered"
            color="secondary"
          >
          </BaseButton>
        </div>

        <h1 className="mt-8 text-left text-[48px] font-lato-light leading-[48px] text-darkGray">
          {title}
        </h1>

        <p className="mt-4 text-left text-[16px] font-normal leading-[19px] text-primary">
          {date}
        </p>

        <p className="mt-14 text-left text-[22px] font-medium leading-[27px] text-darkGray">
          {description}
        </p>
      </div>
    </div>
  )
};
