import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { ImageCarouselProps } from "./types";
import { RichText } from "../RichText";

export default function ImageCarousel({
  title,
  description,
  images,
}: ImageCarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
        if (swiperRef.current) {
          swiperRef.current.slideTo(nextIndex);
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSlideChange = (swiper: SwiperType): void => {
    setCurrentIndex(swiper.activeIndex);
  };

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
    <div className="w-full px-0">
      <div className="w-full">
        {title && (
          <h2 className="mb-2 text-center text-2xl font-bold">{title}</h2>
        )}

        {description && (
          <RichText
            className="mb-4 text-center text-gray-600"
            content={description}
          />
        )}

        <Swiper
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination]}
          className="mx-auto w-full max-w-[1042px]"
        >
          {images.map((img) => (
            <SwiperSlide key={img.key}>
              <div className="relative h-[300px] w-full md:h-[726px]">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="my-4 flex justify-center">
          {images.map((_, index) => (
            <button
              type="button"
              key={_.key}
              aria-label={`Slide ${index + 1}`}
              onClick={() => handleIndicatorClick(index)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              className={`mx-1 size-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-darkGray" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
