import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MainOptionsActionsProps } from "./types";

export default function MainOptionsActions({
  options,
  rounded = "rounded-3xl",
}: MainOptionsActionsProps): JSX.Element {
  return (
    <main
      className={`hidden items-center justify-center gap-10 bg-primary p-9 text-white lg:flex ${rounded}`}
    >
      {options?.map((option, index) => {
        const href =
          option.link?.external && option.link.url
            ? option.link.url
            : (option.link?.path ?? "#");

        return (
          <React.Fragment key={option.text}>
            <Link
              href={href}
              target={option.link?.external ? "_blank" : "_self"}
              rel={option.link?.external ? "noopener noreferrer" : undefined}
              className="flex max-w-72 cursor-pointer items-center gap-2 hover:opacity-80"
            >
              <Image
                src={option.icon.url}
                alt={option.icon.alt}
                width={25}
                height={32}
              />
              <span className="text-lg leading-none 2xl:text-[26px]">
                {option.text}
              </span>
            </Link>

            {index < options.length - 1 && (
              <span className="self-stretch border-l border-white" />
            )}
          </React.Fragment>
        );
      })}
    </main>
  );
}
