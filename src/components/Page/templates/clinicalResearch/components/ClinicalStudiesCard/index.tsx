import { CircleChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Study } from "../../type";

export default function ClinicalStudiesCard(study: Study): JSX.Element {
  const router = useRouter();

  return (
    <Link href={study?.path}>
      <div className="my-10 flex flex-col lg:my-6 lg:flex-row">
        <div className="flex flex-col justify-center rounded-t-3xl bg-custom-gradient-dark p-7 lg:w-[375px] lg:items-center lg:rounded-br-3xl lg:rounded-tr-none lg:p-0">
          <h1 className="text-2xl text-white 2xl:text-title-lg">
            {study?.name}
          </h1>
          <span className="text-lg text-white 2xl:text-2xl">
            {study?.execution.unit.name}
          </span>
        </div>

        <div className="w-full rounded-b-3xl bg-gray-foreground p-10 lg:max-w-[638px] lg:rounded-b-none">
          <p className="text-[15px] text-darkGray 2xl:text-xl">
            {study?.shortDescription}
          </p>
        </div>

        <div className="hidden w-16 cursor-pointer items-center justify-center rounded-e-3xl bg-primary hover:bg-primary-foreground lg:flex">
          <CircleChevronRight
            size={29}
            color="white"
            onClick={() => router.push(study?.path)}
          />
        </div>
      </div>
    </Link>
  );
}
