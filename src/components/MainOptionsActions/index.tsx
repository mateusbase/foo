import React from "react";
import Link from "next/link";
import { MainOptionsActionsProps } from "./types";

export default function MainOptionsActions({
  options,
  rounded = "rounded-3xl",
}: MainOptionsActionsProps): JSX.Element {
  return (
    <main
      className={`flex justify-center gap-10 bg-primary p-10 text-white ${rounded} hidden lg:flex`}
    >
      {options.map((option, index) => (
        <React.Fragment key={option.id}>
          <Link href={option.link || "#"} passHref>
            <div className="flex">
              <button type="button" className="flex items-center space-x-2">
                <option.icon />
                <span className="text-lg leading-none 2xl:text-xl">
                  {option.title}
                </span>
              </button>
            </div>
          </Link>
          <section>
            {index < options.length - 1 && (
              <span className="mx-7 border-y-large border-l border-white" />
            )}
          </section>
        </React.Fragment>
      ))}
    </main>
  );
}
