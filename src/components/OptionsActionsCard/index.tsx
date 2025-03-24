/* eslint-disable prettier/prettier */
import Link from "next/link";
import { MainOptionsActionsProps } from "./types";

export default function OptionsActionsCard({
  options,
}: MainOptionsActionsProps): JSX.Element {
  return (
    <div className="grid w-full grid-cols-2 gap-4 pb-4 pt-8 text-white md:grid-cols-4 lg:hidden">
      {options.map((option) => (
        <div
          key={option.id}
          className={`flex min-h-24 items-start rounded-lg px-4 py-3 ${option.id === 1 ? "bg-secondary" : "bg-primary"
            }`}
        >
          <Link href={option.link || "#"} passHref>
            <button type="button" className="flex flex-col items-start">
              <option.icon />
              <span className="mt-2 text-start text-sm">{option.title}</span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
