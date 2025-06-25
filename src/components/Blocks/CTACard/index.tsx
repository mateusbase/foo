import { Button } from "@/components/Button";
import Link from "next/link";
import clsx from "clsx";
import { CTACardProps } from "./types";
import { RichText } from "../RichText";

export default function CTACard({
  title,
  description,
  variant = "border",
  text,
  link,
  className,
  richTextContent,
}: CTACardProps): JSX.Element {
  const isBorder = variant === "border";

  return (
    <div
      className={clsx(
        "border-3 mx-auto flex min-h-72 w-full min-w-[330px] flex-col justify-between rounded-xl p-4 text-center",
        isBorder
          ? "border-2 border-purpleMedium bg-white text-darkGray"
          : "bg-purpleMedium text-white",
        className,
      )}
    >
      <div className="flex flex-col">
        <span className="mb-6 px-6 py-9 font-lato-black text-2xl font-bold md:text-4xl lg:text-2xl xl:text-4xl">
          {title}
        </span>

        {richTextContent ? (
          <RichText
            content={richTextContent}
            className={clsx(
              "px-9 font-lato-thin text-xl md:text-2xl lg:text-lg xl:text-2xl",
              isBorder ? "[&_p]:text-darkGray" : "[&_p]:text-white",
            )}
          />
        ) : (
          <span className="px-9 font-lato-thin text-xl md:text-2xl lg:text-lg xl:text-2xl">
            {description}
          </span>
        )}
      </div>

      {link?.url || text ? (
        <div className="mb-6 mt-10 flex w-full justify-center">
          <Link
            href={link?.url || ""}
            target={link?.openOnNewTab ? "_blank" : "_self"}
            rel={link?.external ? "noopener noreferrer" : undefined}
          >
            <Button
              className={clsx(
                "rounded-md px-12 py-3 text-lg",
                isBorder
                  ? "border-2 border-purpleMedium bg-purpleMedium text-white"
                  : "bg-white text-purpleMedium",
              )}
            >
              {text}
            </Button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
