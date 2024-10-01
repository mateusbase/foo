import React from "react";
import { NavigationButtonProps } from "./types";

export default function NavigationButton({
  onClick,
  icon,
  label,
  ref,
}: NavigationButtonProps): JSX.Element {
  return (
    <button
      ref={ref}
      type="button"
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
      aria-label={label}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
