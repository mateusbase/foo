import React from "react";
import { MedicalServiceCardProps } from "./types";

export default function InfoCard({
  roundedSide = "right",
  customPadding,
  children,
  imageUrl,
}: MedicalServiceCardProps): JSX.Element {
  const backgroundUrl = imageUrl;

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
            imageUrl
              ? backgroundUrl
              : "https://i.postimg.cc/3xkfhr8J/Captura-de-tela-2024-09-27-134021.png"
          }')`,
        }}
      />
      <div
        className={`flex flex-1 flex-col justify-between gap-12 bg-custom-gradient-dark-145deg lg:bg-custom-gradient-dark ${
          customPadding ? `px-${customPadding}` : "px-14"
        } py-8`}
      >
        {children}
      </div>
    </div>
  );
}
