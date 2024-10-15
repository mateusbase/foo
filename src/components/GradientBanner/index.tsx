/* eslint-disable prettier/prettier */
import { GradientBannerProps } from "./types";

export default function GradientBanner({
  image,
  sideImage = "left",
  children,
  backgroundType = "gradient",
}: GradientBannerProps): JSX.Element {
  return (
    <div className="flex w-full justify-between text-white md:my-10 lg:h-[536px]">
      {sideImage === "left" ? (
        <div className="flex w-full flex-row">
          <div
            className={`flex size-full flex-col justify-between gap-2 rounded-none px-12 md:w-1/2 md:rounded-bl-[100px] lg:w-1/2   lg:px-20 ${backgroundType === "gradient"
              ? "bg-gradient-to-t from-purpleDark to-purpleLight"
              : "bg-darkGray"
              }`}
          >
            {children}
          </div>

          <div className="hidden h-full w-1/2 md:flex">
            <img
              src={image}
              alt="Imagem 1"
              className=" size-full object-fill"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row">
          <div className="size-full h-1/2 lg:h-full lg:w-1/2">
            <img
              src={image}
              alt="Imagem 1"
              className="size-full object-fill lg:rounded-bl-[100px]"
            />
          </div>

          <div
            className={`flex flex-col justify-between gap-2 p-8 sm:rounded-bl-[100px] md:h-[532px] lg:h-full lg:w-1/2 lg:rounded-none lg:px-12 ${backgroundType === "gradient"
              ? "bg-gradient-to-t from-purpleAccent from-5% via-30% to-primary-foreground"
              : "bg-darkGray"
              }`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
