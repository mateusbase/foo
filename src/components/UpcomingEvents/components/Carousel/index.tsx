import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps): JSX.Element {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState<number>(0);

  useEffect(() => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.firstElementChild as HTMLElement;
      if (firstChild) {
        const { width } = firstChild.getBoundingClientRect();
        const marginRight = parseInt(
          window.getComputedStyle(firstChild).marginRight,
        );
        setItemWidth(width + marginRight);
      }
    }

    const handleResize = () => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstElementChild as HTMLElement;
        if (firstChild) {
          const { width } = firstChild.getBoundingClientRect();
          const marginRight = parseInt(
            window.getComputedStyle(firstChild).marginRight,
          );
          setItemWidth(width + marginRight);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [children]);

  const handleNext = (): void => {
    if (carouselRef.current && itemWidth) {
      carouselRef.current.scrollBy({
        left: itemWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = (): void => {
    if (carouselRef.current && itemWidth) {
      carouselRef.current.scrollBy({
        left: -itemWidth,
        behavior: "smooth",
      });
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
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
          aria-label="Previous"
          onClick={handlePrevious}
        >
          <IoIosArrowBack
            className="text-primary dark:text-gray-800"
            size={35}
          />
        </button>
        <button
          type="button"
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
          aria-label="Next"
          onClick={handleNext}
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
