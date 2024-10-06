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
          <div className="flex">
            <Link href={option.link || "#"} passHref>
              <button type="button" className="flex items-center space-x-2">
                <option.icon className="size-6" />
                <span className="text-xl">{option.title}</span>
              </button>
            </Link>
          </div>
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
