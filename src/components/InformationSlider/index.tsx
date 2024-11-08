/* eslint-disable prettier/prettier */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { InformationSliderProps } from "./types";
import { LogoIcon } from "../Icons";
import SliderArrows from "../SliderArrows";

export default function InformationSlider({
  title,
  description,
  image,
  backgroundType = "gradient",
}: InformationSliderProps): JSX.Element {
  const { onBeforeInit, nextRef, prevRef, swiperRef } = useSwiperNavigation();

  return (
    <div className="relative flex h-[536px] w-full justify-between text-white">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        loop
        onBeforeInit={(swiper) => onBeforeInit(swiper)}
      >
        <SwiperSlide className="flex h-full">
          <div
            className={`flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] px-20 py-10 ${
              backgroundType === "gradient"
                ? "bg-gradient-to-r from-primary-foreground to-secondary-foreground"
                : "bg-darkGray"
            }`}
          >
            <div className="mb-2 mt-4">
              <LogoIcon size={1} />
            </div>

            <div>
              <p className="mb-9 text-5xl">{title}</p>
            </div>

            <div>
              <p className="mb-32 text-2xl">{description}</p>
            </div>
          </div>

          <div className="h-full w-1/2">
            <img
              src={image}
              alt="Imagem 1"
              className="size-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-5 left-[72px] z-10 flex">
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          size={0.5}
          color="text-white"
        />
      </div>
    </div>
  );
}
