import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps): JSX.Element {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

  const checkCarouselPosition = (): void => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const tolerance = 2;
      setIsAtStart(scrollLeft <= tolerance);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - tolerance);
    }
  };

  useEffect(() => {
    const updateItemWidth = (): void => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstElementChild as HTMLElement;
        if (firstChild) {
          const { width } = firstChild.getBoundingClientRect();
          const marginRight = parseInt(
            window.getComputedStyle(firstChild).marginRight,
            10,
          );
          setItemWidth(width + marginRight);
        }
      }
    };

    updateItemWidth();

    const handleResize = (): void => {
      updateItemWidth();
      checkCarouselPosition();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children]);

  useEffect(() => {
    checkCarouselPosition();
  }, [itemWidth]);

  const handleNext = (): void => {
    if (carouselRef.current && itemWidth) {
      carouselRef.current.scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });
      checkCarouselPosition();
    }
  };

  const handlePrevious = (): void => {
    if (carouselRef.current && itemWidth) {
      carouselRef.current.scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });
      checkCarouselPosition();
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex h-[900px] overflow-hidden scroll-smooth"
        ref={carouselRef}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {React.Children.map(children, (child) => (
          <div className="mr-3">{child}</div> // margin-right manual
        ))}
      </div>
      <div className="absolute bottom-8 right-4 z-30 flex">
        <button
          type="button"
          className={`group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60 ${isAtStart ? "cursor-not-allowed opacity-50" : ""}`}
          aria-label="Previous"
          onClick={handlePrevious}
          disabled={isAtStart}
        >
          <IoIosArrowBack
            className="text-primary dark:text-gray-800"
            size={35}
          />
        </button>
        <button
          type="button"
          className={`group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60 ${isAtEnd ? "cursor-not-allowed opacity-50" : ""}`}
          aria-label="Next"
          onClick={handleNext}
          disabled={isAtEnd}
        >
          <IoIosArrowForward
            className="text-primary dark:text-gray-800"
            size={35}
          />
        </button>
      </div>
    </div>
  );
}
