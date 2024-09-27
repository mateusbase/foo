/* eslint-disable prettier/prettier */
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Image } from "@nextui-org/react";
import { InformationSliderProps } from "./types";

export default function InformationSlider({
  title,
  description,
  image,
  backgroundType = "gradient",
}: InformationSliderProps): JSX.Element {
  return (
    <div className="flex h-[536px] w-full justify-between text-white">
      <div
        className={`flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] px-20 py-10 ${backgroundType === "gradient"
          ? "bg-gradient-to-r from-primary-foreground to-secondary-foreground"
          : "bg-darkGray"
          }`}
      >
        <div className="mt-4">
          <Image
            src="https://grupooncoclinicas.com/wp-content/themes/grupo-oncoclinicas/assets/imgs/header/oncoclinicas.svg"
            alt="Logo"
            className="w-[250px] max-w-none lg:w-[300px]"
          />
        </div>

        <div>
          <p className="text-5xl font-st">{title}</p>
        </div>

        <div>
          <p className="text-2xl">{description}</p>
        </div>

        <div className="flex gap-2">
          <MdKeyboardArrowLeft size="30px" />
          <MdOutlineKeyboardArrowRight size="30px" />
        </div>
      </div>

      <div className="h-full w-1/2">
        <img src={image} alt="Imagem 1" className="h-full w-full" />
      </div>
    </div>
  );
}
