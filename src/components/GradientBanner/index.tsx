/* eslint-disable prettier/prettier */
import { GradientBannerProps } from "./types";

export default function GradientBanner({
  image,
  sideImage = "left",
  children,
  backgroundType = "gradient",
}: GradientBannerProps): JSX.Element {
  return (
    <div className="my-10 flex w-full justify-between text-white  lg:h-[536px]">
      {sideImage === "left" ? (
        <div className="flex flex-row">
          <div
            className={`flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px]  px-12 lg:px-20 ${backgroundType === "gradient"
              ? "bg-gradient-to-t from-purpleDark to-purpleLight"
              : "bg-darkGray"
              }`}
          >
            {children}
          </div>

          <div className="h-full w-1/2">
            <img
              src={image}
              alt="Imagem 1"
              className="size-full object-fill"
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
            className={`flex h-[532px] flex-col justify-between gap-2 rounded-bl-[100px] p-8 lg:h-full lg:w-1/2 lg:rounded-none lg:px-12 ${backgroundType === "gradient"
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
