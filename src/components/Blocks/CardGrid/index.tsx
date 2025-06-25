import clsx from "clsx";
import Image from "next/image";
import { IoIosArrowDropright } from "react-icons/io";
import { CardGridProps } from "./types";

interface Card {
  title?: string;
  icon?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  description?: string;
}

export default function CardGrid({
  title,
  description,
  columns = "3",
  cards = [],
  backgroundColor,
  centerText = false,
  orientation = "horizontal",
  titlePosition = "below",
}: CardGridProps): JSX.Element {
  const isGreen = backgroundColor === "green";
  const isVertical = orientation === "vertical";
  const isTitleSideBySide = titlePosition === "side";

  const cardContainerClass = clsx(
    "flex min-w-0 flex-col gap-4 rounded-[20px] border border-lightGray px-3 py-5 lg:p-6",
    {
      "bg-primary text-white": isGreen,
      "bg-white text-primary": !isGreen,
    },
  );

  const descriptionTextClass = clsx(
    "text-left text-[13px] leading-[15px] sm:leading-[18px] md:font-medium lg:mt-2 2xl:text-[16px]",
    {
      "text-white": isGreen,
      "text-darkGray": !isGreen,
    },
  );

  const renderVerticalContent = (card: Card): JSX.Element => (
    <>
      {card.title && (
        <h3 className="mt-4 text-center text-lg font-bold lg:text-2xl">
          {card.title}
        </h3>
      )}

      {card.icon?.url && (
        <div className="flex justify-center">
          <Image
            src={card.icon?.url}
            alt={card.icon?.alt || ""}
            width={card.icon?.width || 40}
            height={card.icon?.height || 40}
            className="object-contain"
          />
        </div>
      )}

      {card.description && (
        <span className={clsx(descriptionTextClass, "text-center")}>
          {card.description}
        </span>
      )}
    </>
  );

  const renderSideBySideContent = (card: Card): JSX.Element => (
    <>
      <div className="flex items-center justify-between gap-3">
        {card.icon?.url && (
          <div className="shrink-0">
            <Image
              src={card.icon?.url}
              alt={card.icon?.alt || card.title || "Default alt text"}
              width={card.icon?.width || 40}
              height={card.icon?.height || 40}
              className="size-14"
            />
          </div>
        )}

        <div className="flex-1">
          {card.title && (
            <h3 className="text-sm font-medium leading-tight md:text-base lg:text-lg">
              {card.title}
            </h3>
          )}
        </div>
      </div>

      {card.description && (
        <span className={descriptionTextClass}>{card.description}</span>
      )}
    </>
  );

  const renderHorizontalContent = (card: Card): JSX.Element => (
    <>
      <div className="flex flex-col items-start lg:flex-row lg:items-center">
        {card.icon?.url && (
          <div className="flex items-center justify-center rounded-full">
            <Image
              src={card.icon?.url}
              alt={card.icon?.alt || card.title || "Default alt text"}
              width={card.icon?.width || 40}
              height={card.icon?.height || 40}
              className="min-w-16 max-w-16 object-contain lg:mr-4"
            />
          </div>
        )}

        <div>
          {card.title && (
            <h3 className="mt-2 align-middle text-sm leading-4 sm:mt-0 sm:leading-[32px] md:font-normal lg:text-sm xl:text-[22px]">
              {card.title}
            </h3>
          )}
        </div>
      </div>

      {card.description && (
        <span className={descriptionTextClass}>{card.description}</span>
      )}
    </>
  );

  const renderCardContent = (card: Card): JSX.Element => {
    if (isVertical) {
      return renderVerticalContent(card);
    }

    if (isTitleSideBySide) {
      return renderSideBySideContent(card);
    }

    return renderHorizontalContent(card);
  };

  return (
    <div className="w-full">
      <div className={clsx("mb-12", centerText ? "text-center" : "text-left")}>
        {title && (
          <h2 className="text-3xl text-primary lg:mb-2 lg:text-title-lg">
            {title}
          </h2>
        )}

        {description && (
          <span className="text-lg text-darkGray">{description}</span>
        )}
      </div>

      <div
        className={clsx("grid w-full grid-cols-1 gap-6", {
          "sm:grid-cols-2": columns === "2",
          "sm:grid-cols-3": columns === "3",
          "sm:grid-cols-4": columns === "4",
          "sm:grid-cols-5": columns === "5",
          "sm:grid-cols-6": columns === "6",
        })}
      >
        {cards.map((card) => (
          <div key={`${card.title}`} className={cardContainerClass}>
            {renderCardContent(card)}

            {card.link?.url && (
              <div className="hidden items-center justify-start rounded-full lg:flex">
                <IoIosArrowDropright
                  size={29}
                  className="text-primary-foreground"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
