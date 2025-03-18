import Link from "next/link";
import BaseButton from "../Button";
import { NewsInformationCardProps } from "./types";

const OcJournalItems = ({ options }: NewsInformationCardProps): JSX.Element => {
  const { title, date, description, image } = options;
  const newSlug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/medicos/oc-journal/${newSlug}`}>
      <div className="mx-auto flex size-full flex-col gap-4 md:min-h-[325px] lg:min-h-[649px] lg:flex-row lg:gap-8">
        <div className="h-auto shrink-0 lg:w-[812px]">
          <img
            src={image}
            alt={title}
            className="size-full object-cover lg:rounded-md"
          />
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
            <h1 className="text-left text-xl font-light text-darkGray lg:text-[48px] lg:leading-[48px]">
              {title}
            </h1>
            <p className="text-left text-sm font-medium leading-[19px] text-primary lg:text-[16px]">
              {date}
            </p>
            <p className="mb-4 text-left text-sm font-medium text-darkGray md:mb-6 lg:mb-0 lg:text-[22px] lg:leading-[27px]">
              {description}
            </p>
          </div>

          <div className="mt-4 md:mt-auto lg:mb-16 lg:mt-10">
            <p className="mb-4 text-sm font-medium text-darkGray md:mb-2 lg:mb-10 lg:text-[22px]">
              Acesse o artigo completo deste estudo.
            </p>
            <BaseButton
              color="primary"
              className="mt-2 w-full text-white lg:mt-4 lg:w-40"
            >
              Saiba mais
            </BaseButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OcJournalItems;
