import React from "react";
import { MedicalServiceCardProps } from "./types";

export default function InfoCard({
  roundedSide = "right",
  backgroundImageUrl,
  customPadding,
  children,
}: MedicalServiceCardProps): JSX.Element {
  return (
    <div
      className={`flex w-auto flex-col overflow-hidden ${
        roundedSide === "left" ? "rounded-bl-[100px]" : "rounded-br-[100px]"
      } bg-white`}
    >
      <div
        className="h-[376px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${
            backgroundImageUrl
              ? `/assets/images/${backgroundImageUrl}`
              : "https://i.postimg.cc/3xkfhr8J/Captura-de-tela-2024-09-27-134021.png"
          }')`,
        }}
      />
      <div
        className={`flex min-h-[292px] w-full flex-col justify-between gap-12 ${
          roundedSide === "left" ? "rounded-bl-[100px]" : "rounded-br-[100px]"
        } bg-gradient-to-br from-primary-foreground to-secondary-foreground ${customPadding ? `px-${customPadding}` : "px-14"} py-8`}
      >
        {children}
      </div>
    </div>
  );
}
