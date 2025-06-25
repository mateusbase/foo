import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { IconCardProps } from "./types";

export default function IconCard({
  cardTitle,
  cardDescription,
  cardIcon,
  showButton = true,
  variant = "stacked",
}: IconCardProps): JSX.Element {
  const cardSlug = cardTitle
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const isInline = variant === "inline";

  return (
    <Link
      href={`/tudo-sobre-o-cancer/tipos-de-cancer/${cardSlug}`}
      className="w-full"
    >
      <div className="flex size-full min-h-[254px] flex-col justify-between rounded-[20px] border border-lightGray bg-white p-4 md:min-h-[280px] md:gap-6 lg:min-h-[226px] lg:p-6">
        <div className="flex grow flex-col gap-4 md:gap-6">
          <div
            className={`flex gap-5 ${
              isInline ? "flex-row items-center" : "mt-8 flex-col items-center"
            } lg:flex-row lg:items-center`}
          >
            <Image
              src={cardIcon?.url || ""}
              alt={cardIcon?.alt || ""}
              width={cardIcon?.width}
              height={cardIcon?.height}
              className="size-[55px] object-cover"
            />

            <h3
              className={`text-2xl leading-4 text-primary sm:leading-[32px] md:font-normal lg:text-[22px] ${
                isInline ? "text-left" : "mt-2 text-center"
              }`}
            >
              {cardTitle}
            </h3>
          </div>

          <p
            className={`text-lg leading-[22px] text-darkGray sm:leading-[24px] md:font-medium lg:text-base ${
              isInline ? "text-left" : "text-center"
            }`}
          >
            {cardDescription}
          </p>
        </div>

        {showButton && (
          <div className="mt-6 flex items-center justify-start">
            <IoIosArrowDropright
              size={29}
              className="text-primary-foreground"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
