/* eslint-disable prettier/prettier */
import { GradientBannerProps } from "./types";

export default function GradientBanner({
  image,
  sideImage = "left",
  children,
  backgroundType = "gradient",
}: GradientBannerProps): JSX.Element {
  return (
    <div className="flex h-[536px] w-full justify-between text-white">
      {sideImage === "left" ? (
        <>
          <div
            className={`flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] px-20 py-10 ${backgroundType === "gradient"
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
        </>
      ) : (
        <>
          <div className="h-full w-1/2 ">
            <img
              src={image}
              alt="Imagem 1"
              className="size-full rounded-bl-[100px] object-fill"
            />
          </div>

          <div
            className={`flex h-full w-1/2 flex-col justify-between gap-2  px-16 py-10 ${backgroundType === "gradient"
              ? "bg-gradient-to-t from-purpleAccent from-5% via-30% to-primary-foreground"
              : "bg-darkGray"
              }`}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}
