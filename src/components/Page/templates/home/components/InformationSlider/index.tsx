import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SliderArrows from "@/components/BaseSwiper/components/SliderArrows";
import { InformationItem, InformationSliderProps } from "./types";

export default function InformationSlider({
  isSwiper = false,
  backgroundType = "gradient",
  items = [],
}: InformationSliderProps): JSX.Element {
  const { nextRef, prevRef, swiperRef, onBeforeInit } = useSwiperNavigation();

  const renderContent = (item: InformationItem): JSX.Element => (
    <div className="relative flex h-[536px] w-full justify-between text-white">
      <div
        className={`flex h-full w-1/2 flex-col justify-between gap-2 rounded-bl-[100px] px-20 py-10 ${
          backgroundType === "gradient"
            ? "bg-custom-gradient-dark"
            : "bg-darkGray"
        }`}
      >
        <div className="mb-2 mt-4">
          {item.logo?.url && (
            <Image
              src={item.logo.url}
              alt={item.logo.alt}
              width={item.logo.width}
              height={item.logo.height}
            />
          )}
        </div>

        <div>
          <p className="mb-9 text-[50px] leading-none">{item.title}</p>

          {item.subtitle && <p className="text-3xl">{item.subtitle}</p>}
        </div>

        <div>
          <p className="mb-32 text-2xl">{item.description}</p>
        </div>
      </div>

      <div className="h-full w-1/2">
        <img
          src={item.image.url}
          alt={item.image.alt}
          className="size-full object-cover"
          loading="lazy"
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
        onBeforeInit={(swiper) => onBeforeInit(swiper)}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id ?? index}>
            {renderContent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return renderContent(items[0]);
}
