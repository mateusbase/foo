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
        {informations.map((information) => (
          <div
            key={information.id}
            className={`mx-1 h-3 w-3 rounded-full ${informations[currentIndex].id === information.id ? "bg-darkGray" : "bg-gray-300"}`}
            onClick={() => {
              setCurrentIndex(information.id);
              swiperRef.current?.slideTo(information.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
