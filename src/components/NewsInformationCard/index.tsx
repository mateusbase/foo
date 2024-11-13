import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import BaseButton from "../Button";
import { NewsInformationCardProps } from "./types";

export default function NewsInformationCard({
  options,
}: NewsInformationCardProps): JSX.Element {
  const { title, date, description, image } = options;
  const newSlug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/noticias/${newSlug}`}>
      <div className="mx-auto flex w-full flex-col gap-4 lg:h-full lg:flex-row lg:gap-8">
        <div className="h-auto shrink-0 lg:max-w-[812px]">
          <img
            src={image}
            alt="ASCO Annual Meeting 2024"
            className="w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-start">
          <div>
            <BaseButton
              className="max-h-9 text-sm md:w-52"
              variant="bordered"
              color="secondary"
              startContent={<LuArrowUpRight />}
            >
              Inovação & Oncologia
            </BaseButton>
          </div>

          <h1 className="mt-8 text-left text-xl font-light text-darkGray lg:text-[48px] lg:leading-[48px]">
            {title}
          </h1>

          <p className="mt-4 text-left text-sm font-normal text-primary lg:text-[16px] lg:leading-[19px]">
            {date}
          </p>

          <p className="mt-6 text-left text-sm font-medium text-darkGray lg:mt-14 lg:text-xl lg:leading-[27px]">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
