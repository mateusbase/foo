/* eslint-disable prettier/prettier */
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { InformationItem, InformationSliderProps } from "./types";
import { LogoIcon } from "../Icons";
import SliderArrows from "../SliderArrows";

export default function InformationSlider({
  isSwiper = false,
  backgroundType = "gradient",
  items = [],
  title,
  description,
  subtitle,
  image = "https://i.postimg.cc/pXR1qN6C/Captura-de-tela-2024-09-22-182042.png",
}: InformationSliderProps): JSX.Element {
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

  const renderContent = (item: InformationItem): JSX.Element => (
    <div className="relative flex h-[536px] w-full justify-between text-white">
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
          <p className="mb-9 text-5xl">{item.title}</p>
          {item.subtitle && <p className="text-3xl">{item.subtitle}</p>}
        </div>

        <div>
          <p className="mb-32 text-2xl">{item.description}</p>
        </div>
      </div>

      <div className="h-full w-1/2">
        <img
          src={item.image}
          alt="Imagem 1"
          className="size-full object-cover"
        />
      </div>

      {isSwiper && (
        <div className="absolute bottom-5 left-[72px] z-10 flex">
          <SliderArrows
            swiperRef={swiperRef}
            prevRef={prevRef}
            nextRef={nextRef}
            size={0.5}
            color="text-white"
          />
        </div>
      )}
    </div>
  );

  if (isSwiper && items.length > 0) {
    return (
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>{renderContent(item)}</SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return renderContent({
    title: title ?? "",
    description: description ?? "",
    subtitle,
    image: image ?? "",
  });
}
