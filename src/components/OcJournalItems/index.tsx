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
      <div className="mx-auto mt-20 flex w-full gap-8">
        <div className="h-auto w-[812px] shrink-0">
          <img
            src={image}
            alt="ASCO Annual Meeting 2024"
            className="size-full rounded-md object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-start">
          <h1 className="text-left text-[48px] font-light leading-[48px] text-darkGray">
            {title}
          </h1>

          <p className="mt-8 text-left text-[16px] font-medium leading-[19px] text-primary">
            {date}
          </p>

          <p className="mt-8 text-left text-[22px] font-medium leading-[27px] text-darkGray">
            {description}
          </p>
          <p className="mt-6 text-[22px] font-medium text-darkGray">
            Acesse o artigo completo deste estudo.
          </p>
          <div className="mt-6 flex w-full">
            <BaseButton color="primary" className="min-w-40 text-white">
              Download
            </BaseButton>
          </div>
        </div>
      </div>
    </Link>
  );
}
