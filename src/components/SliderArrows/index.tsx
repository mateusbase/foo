import { useState, useEffect } from "react";
import NextArrowIcon from "@/components/Icons/NextArrowIcon";
import PreviousArrowIcon from "@/components/Icons/PreviousArrowIcon";
import { SliderArrowsProps } from "./types";

const SliderArrows = ({
  swiperRef,
  prevRef,
  nextRef,
  size,
  showSwiperPagination,
  color = "text-primary-foreground",
}: SliderArrowsProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  useEffect(() => {
    swiperRef?.current?.on("slideChange", () => {
      setCurrentIndex((swiperRef.current?.realIndex || 0) + 1);
    });
  }, [swiperRef]);

  const handlePrev = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = (): void => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 align-middle lg:justify-end">
      <button
        ref={prevRef}
        type="button"
        className="group flex size-10 items-center justify-center rounded-full hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
        aria-label="Previous"
        onClick={handlePrev}
      >
        <PreviousArrowIcon
          size={size}
          className={`${color} dark:text-gray-800`}
        />
      </button>
      {showSwiperPagination && (
        <span className="text-sm text-primary">{currentIndex}</span>
      )}
      <button
        ref={nextRef}
        type="button"
        className="group flex size-10 items-center justify-center rounded-full hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
        aria-label="Next"
        onClick={handleNext}
      >
        <NextArrowIcon size={size} className={`${color} dark:text-gray-800`} />
      </button>
    </div>
  );
};

export default SliderArrows;
