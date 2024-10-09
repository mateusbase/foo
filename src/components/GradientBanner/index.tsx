/* eslint-disable prettier/prettier */
import { Image } from "@nextui-org/react";

import { GradientBannerProps } from "./types";

export default function GradientBanner({
  image,
  children,
  backgroundType = "gradient",
}: GradientBannerProps): JSX.Element {
  return (
    <div className="flex h-[536px] w-full justify-between text-white">
      <div
        className={`flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] px-20 py-10 ${backgroundType === "gradient"
          ? "bg-gradient-to-t from-purpleDark to-purpleLight"
          : "bg-darkGray"
          }`}
      >
        {children}
      </div>

      <div className="h-full w-1/2 ">
        <img src={image} alt="Imagem 1" className="size-full" />
      </div>
    </div>
  );
}
