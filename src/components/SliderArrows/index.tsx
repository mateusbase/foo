import { useState, useEffect } from "react";
import { Swiper as SwiperType } from "swiper/types";
import NextArrowIcon from "@/components/Icons/NextArrowIcon";
import PreviousArrowIcon from "@/components/Icons/PreviousArrowIcon";

type SliderArrowsProps = {
  swiperRef: React.RefObject<SwiperType>;
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
};

const SliderArrows = ({ swiperRef, prevRef, nextRef }: SliderArrowsProps) => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        const activeIndex = swiperRef.current.activeIndex;
        setIsPrevDisabled(activeIndex === 0);
        setIsNextDisabled(activeIndex === swiperRef.current.slides.length - 1);
      }
    };

    if (swiperRef.current) {
      swiperRef.current.on("slideChange", handleSlideChange);
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off("slideChange", handleSlideChange);
      }
    };
  }, [swiperRef]);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="mt-4 flex justify-center space-x-4 lg:justify-end">
      <button
        ref={prevRef}
        type="button"
        className={`group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60 ${
          isPrevDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        aria-label="Previous"
        onClick={handlePrev}
        disabled={isPrevDisabled}
      >
        <PreviousArrowIcon className="text-primary-foreground dark:text-gray-800" />
      </button>

      <button
        ref={nextRef}
        type="button"
        className={`group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60 ${
          isNextDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        aria-label="Next"
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        <NextArrowIcon className="text-primary-foreground dark:text-gray-800" />
      </button>
    </div>
  );
};

export default SliderArrows;
