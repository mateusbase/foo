import Link from "next/link";
import BaseButton from "../Button";
import { NewsInformationCardProps } from "./types";

export default function OcJournalItems({
  options,
}: NewsInformationCardProps): JSX.Element {
  const { title, date, description, image } = options;
  const newSlug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/medicos/oc-journal/${newSlug}`}>
      <div className="mx-auto flex w-full flex-col gap-2 lg:mt-20 lg:flex-row lg:gap-8">
        <div className="h-auto shrink-0 border-2 lg:w-[812px]">
          <img
            src={image}
            alt="ASCO Annual Meeting 2024"
            className="size-full object-cover lg:rounded-md"
          />
        </div>

        <div className="flex w-full flex-col justify-start">
          <h1 className="text-left text-xl font-light text-darkGray lg:text-[48px] lg:leading-[48px]">
            {title}
          </h1>

          <p className="mt-4 text-left text-sm font-medium leading-[19px] text-primary lg:mt-8 lg:text-[16px]">
            {date}
          </p>

          <p className="mt-4 text-left text-sm font-medium text-darkGray lg:mt-8 lg:text-[22px] lg:leading-[27px]">
            {description}
          </p>
          <p className="mt-6 text-sm font-medium text-darkGray lg:text-[22px]">
            Acesse o artigo completo deste estudo.
          </p>
          <div className="mt-6 flex w-full">
            <BaseButton color="primary" className="w-full text-white lg:w-40">
              Download
            </BaseButton>
          </div>
        </div>
      </div>
    </Link>
  );
}
