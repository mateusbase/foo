import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { useRef, useState } from "react";
import Image from "next/image";
import { SliderProps } from "../types";

export default function BannerSliderHome({ data }: SliderProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const transformedData = data.map((item, index) => ({
    id: index,
    image: item.data,
  }));

  const handleSlideChange = (swiper: SwiperClass): void => {
    setCurrentIndex(swiper.activeIndex);
  };

  const handleIndicatorClick = (index: number): void => {
    swiperRef.current?.slideTo(index);
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleIndicatorClick(index);
    }
  };

  return (
    <div className="w-full">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        {transformedData.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.image.url}
              alt={item.image.alt || ""}
              width={item.image.width}
              height={item.image.height}
              className="h-[189px] w-full rounded-md object-cover md:h-[390px] lg:h-[726px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="my-4 flex justify-center">
        {transformedData.map((item, index) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            aria-label={`Slide ${index + 1}`}
            className={`mx-1 size-3 rounded-full ${
              index === currentIndex ? "bg-darkGray" : "bg-gray-300"
            }`}
            onClick={() => handleIndicatorClick(index)}
            onKeyDown={(event) => handleKeyDown(index, event)}
          />
        ))}
      </div>
    </div>
  );
}
