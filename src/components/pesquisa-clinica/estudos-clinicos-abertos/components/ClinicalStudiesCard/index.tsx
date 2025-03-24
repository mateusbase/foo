import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import { ClinicalStudiesCardProps } from "./types";

export default function ClinicalStudiesCard({
  title,
  unity,
  description,
}: ClinicalStudiesCardProps): JSX.Element {
  const newSlug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/estudos/${newSlug}`}>
      <div className="my-10 flex flex-col lg:my-6 lg:flex-row">
        <div className="flex flex-col justify-center rounded-t-3xl bg-custom-gradient-dark p-7 lg:w-[375px] lg:items-center lg:rounded-br-3xl lg:rounded-tr-none lg:p-0">
          <p className="text-[26px] text-white 2xl:text-title-lg">{title}</p>
          <p className="text-lg text-white 2xl:text-2xl">{unity}</p>
        </div>

        <div className="w-full rounded-b-3xl bg-gray-foreground p-10 lg:max-w-[638px] lg:rounded-b-none">
          <p className="text-[15px] text-darkGray 2xl:text-xl">{description}</p>
        </div>

        <div className="hidden w-16 cursor-pointer items-center justify-center rounded-e-3xl bg-primary hover:bg-primary-foreground lg:flex">
          <CircleChevronRight size={29} color="white" />
        </div>
      </div>
    </Link>
  );
}
