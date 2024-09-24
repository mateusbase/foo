import React from "react";
import { BaseContainerProps } from "./types";

export default function BaseContainer({
  className = "",
  children,
  maxWidth = "max-w-screen-2xl",
  margin = "mx-auto",
  padding = "px-4",
}: BaseContainerProps): JSX.Element {
  return (
    <div className={`${maxWidth} ${margin} ${padding} ${className}`}>
      {children}
    </div>
  );
}
