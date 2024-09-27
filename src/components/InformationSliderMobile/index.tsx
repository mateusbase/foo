/* eslint-disable prettier/prettier */
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Image } from "@nextui-org/react";
import { InformationSliderMobileProps } from "./types";

export default function InformationSliderMobile({
  informations,
}: InformationSliderMobileProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType): void => {
    setCurrentIndex(swiper.activeIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex =
          prevIndex === informations.length - 1 ? 0 : prevIndex + 1;
        if (swiperRef.current) {
          swiperRef.current.slideTo(nextIndex);
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [informations.length]);

  const handleIndicatorClick = (index: number): void => {
    setCurrentIndex(index);
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
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {informations.map((information) => (
          <SwiperSlide key={information.id}>
            <Image
              radius="none"
              src={information.image}
              alt={information.description}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="my-4 flex justify-center">
        {informations.map((information, index) => (
          <div
            key={information.id}
            role="button"
            tabIndex={0}
            aria-label={`Slide ${index + 1}`}
            className={`mx-1 h-3 w-3 rounded-full ${informations[currentIndex].id === information.id
              ? "bg-darkGray"
              : "bg-gray-300"
              }`}
            onClick={() => handleIndicatorClick(index)}
            onKeyDown={(event) => handleKeyDown(index, event)}
          />
        ))}
      </div>
    </div>
  );
}
