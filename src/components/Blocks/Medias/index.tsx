import React from "react";
import clsx from "clsx";
import Image from "next/image";
import CustomVideoPlayer from "@/components/CustomVideoPlayer";
import { MediasBlockProps } from "./types";
import { RichText } from "../RichText";

export default function Medias({
  title,
  description,
  columns = "3",
  align = "center",
  medias,
}: MediasBlockProps): JSX.Element {
  const isSingleColumn = columns === "1";

  return (
    <div
      className={clsx(
        "mb-8 flex flex-col",
        align === "center" && "items-center justify-center text-center",
      )}
    >
      {title && (
        <h2 className="text-left text-3xl text-primary lg:mb-2 lg:text-title-lg">
          {title}
        </h2>
      )}

      {description && (
        <RichText
          className="mb-6 text-lg text-darkGray lg:w-4/5"
          content={description}
        />
      )}

      <div
        className={clsx(
          columns === "1"
            ? clsx("flex flex-col gap-6", {
                "items-center justify-center text-center": align === "center",
                "items-start justify-start text-left": align === "left",
                "items-end justify-end text-right": align === "right",
              })
            : clsx("grid gap-6", {
                "grid-cols-1": true,
                "sm:grid-cols-2": true,
                "md:grid-cols-2": columns === "2",
                "md:grid-cols-3": columns === "3",
                "md:grid-cols-4": columns === "4",
                "lg:grid-cols-4": columns === "4",
                "lg:grid-cols-3": columns === "3",
              }),
          "w-full",
        )}
      >
        {medias.map((item) => {
          const { media, legend } = item;

          let layoutClass = "";

          if (columns === "1") {
            layoutClass =
              align === "full-width" ? "w-full" : "max-w-2xl justify-center";
          } else {
            layoutClass = "mx-auto aspect-square max-w-[280px]";
          }

          const wrapperClasses = clsx("flex flex-col p-4", layoutClass, {
            "items-start text-left": align === "left",
            "items-center text-center": align === "center",
            "items-end text-right": align === "right",
          });

          if (media.type === "image") {
            return (
              <div key={media.data.url} className={wrapperClasses}>
                <Image
                  src={media.data.url}
                  alt={media.data.alt || "Imagem"}
                  width={media.data.width}
                  height={media.data.height}
                  className={clsx(
                    "mx-auto object-contain",
                    isSingleColumn ? "h-auto" : "max-h-full max-w-full",
                  )}
                />
                {legend && (
                  <p className="mt-2 text-sm text-darkGray">{legend}</p>
                )}
              </div>
            );
          }

          if (media.type === "video") {
            return (
              <div key={media.data.url} className={wrapperClasses}>
                <CustomVideoPlayer src={media.data.url} />
                {legend && (
                  <p className="mt-2 text-sm text-darkGray">{legend}</p>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
