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
      <div className="my-6 flex h-[224px] flex-row">
        <div className="flex w-[375px] flex-col items-center justify-center rounded-br-3xl rounded-tl-3xl bg-gradient-to-b from-primary-foreground via-primary-foreground to-secondary-foreground">
          <p className="text-[40px] text-white">{title}</p>
          <p className="text-2xl text-white">{unity}</p>
        </div>
        <div className="w-full max-w-[638px] bg-gray-foreground p-10">
          <p className="text-xl text-darkGray">{description}</p>
        </div>
        <div className="flex w-16 cursor-pointer items-center justify-center rounded-e-3xl bg-primary hover:bg-primary-foreground">
          <CircleChevronRight size={29} color="white" />
        </div>
      </div>
    </Link>
  );
}
