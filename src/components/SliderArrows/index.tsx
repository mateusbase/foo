import { Swiper as SwiperType } from "swiper/types";
import NextArrowIcon from "@/components/Icons/NextArrowIcon";
import PreviousArrowIcon from "@/components/Icons/PreviousArrowIcon";

type SliderArrowsProps = {
  swiperRef: React.RefObject<SwiperType>;
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
};

const SliderArrows = ({ swiperRef, prevRef, nextRef }: SliderArrowsProps) => {
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
  console.log(swiperRef, prevRef, nextRef);

  return (
    <div className="mt-4 flex justify-center space-x-4 lg:justify-end">
      <button
        ref={prevRef}
        type="button"
        className={`group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60`}
        aria-label="Previous"
        onClick={handlePrev}
      >
        <PreviousArrowIcon className="text-primary-foreground dark:text-gray-800" />
      </button>

      <button
        ref={nextRef}
        type="button"
        className={`group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60`}
        aria-label="Next"
        onClick={handleNext}
      >
        <NextArrowIcon className="text-primary-foreground dark:text-gray-800" />
      </button>
    </div>
  );
};

export default SliderArrows;
