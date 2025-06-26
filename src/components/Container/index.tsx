import React from "react";
import { cn } from "@/styles/classes";
import { BaseContainerProps } from "./types";

export default function BaseContainer({
  className = "",
  children,
}: BaseContainerProps): JSX.Element {
  return (
    <div className={cn(`mx-auto max-w-screen-2xl px-4 3xl:px-0`, className)}>
      {children}
    </div>
  );
}
