import React from "react"; // Import React para usar React.Fragment
import { MainOptionsActionsProps } from "./types";

export default function OptionsActionsCard({
  options,
}: MainOptionsActionsProps): JSX.Element {
  return (
    <div className="grid w-full grid-cols-2 gap-3 p-4 text-white md:grid-cols-4 lg:hidden">
      {options.map((option) => (
        <div
          key={option.id}
          className={`flex min-h-24 min-w-28 items-start justify-center rounded-lg p-4 ${option.id === 1 ? "bg-secondary" : "bg-primary"
            }`}
        >
          <button type="button" className="flex flex-col items-start">
            <option.icon className="mb-2 h-6 w-6" />
            <span className="text-start text-sm">{option.title}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
