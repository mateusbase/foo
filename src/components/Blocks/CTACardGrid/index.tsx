import React from "react";
import clsx from "clsx";
import CTACard from "../CTACard";
import { CTACardGridBlockProps } from "../CTACard/types";

const columnClassMap: Record<string, string> = {
  "1": "grid-cols-1",
  "2": "grid-cols-2",
  "3": "grid-cols-3",
};

export default function CTACardGrid({
  title,
  description,
  columns = "3",
  cards,
}: CTACardGridBlockProps): JSX.Element {
  return (
    <div className="w-full">
      {(title?.trim() || description?.trim()) && (
        <div className="mb-12 text-center">
          {title?.trim() && (
            <h1 className="text-left text-3xl text-primary md:text-4xl">
              {title}
            </h1>
          )}

          {description?.trim() && (
            <p className="mb-8 mt-4 text-left text-xl text-darkGray">
              {description}
            </p>
          )}
        </div>
      )}

      <div
        className={clsx("grid gap-6", "grid-cols-1", "md:grid-cols-2", {
          [`lg:${columnClassMap[columns]}`]: columns in columnClassMap,
        })}
      >
        {cards.map((card) => (
          <CTACard key={`${card.title}-${card.link?.url}`} {...card} />
        ))}
      </div>
    </div>
  );
}
