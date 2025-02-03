import Link from "next/link";
import BaseButton from "../Button";
import { NewsInformationCardProps } from "./types";

const OcJournalItems = ({ options }: NewsInformationCardProps): JSX.Element => {
  const { title, date, description, image } = options;
  const newSlug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/medicos/oc-journal/${newSlug}`}>
      <div className="mx-auto flex size-full flex-col gap-4 md:min-h-[649px] lg:flex-row lg:gap-8">
        <div className="h-auto shrink-0 lg:w-[812px]">
          <img
            src={image}
            alt={title}
            className="size-full object-cover lg:rounded-md"
          />
        </div>

        <div className="flex size-full flex-col justify-between">
          <div className="flex h-full flex-col gap-4">
            <h1 className="text-left text-xl font-light text-darkGray lg:text-[48px] lg:leading-[48px]">
              {title}
            </h1>
            <p className="text-left text-sm font-medium leading-[19px] text-primary lg:text-[16px]">
              {date}
            </p>
            <p className="text-left text-sm font-medium text-darkGray lg:text-[22px] lg:leading-[27px]">
              {description}
            </p>
            <div className="flex grow items-end lg:items-start">
              <p className="mb-2 text-sm font-medium text-darkGray lg:text-[22px]">
                Acesse o artigo completo deste estudo.
              </p>
            </div>
          </div>

          <div className="flex w-full lg:mt-10 lg:size-full">
            <BaseButton color="primary" className="w-full text-white lg:w-40">
              Saiba mais
            </BaseButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OcJournalItems;
