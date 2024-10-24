/* eslint-disable prettier/prettier */
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { InformationSliderProps } from "./types";
import { LogoIcon } from "../Icons";

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
          <LogoIcon size={1} />
        </div>

        <div>
          <p className="text-5xl">{title}</p>
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
        <img src={image} alt="Imagem 1" className="size-full" />
      </div>
    </div>
  );
}
