import { useRef, useCallback, useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import { UseSwiperNavigationReturn } from "@/utils/swiperNavigation";

export function useSwiperNavigation(): UseSwiperNavigationReturn {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const onBeforeInit = useCallback((swiper: SwiperType) => {
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      const navigationParams = swiper.params.navigation;
      navigationParams.prevEl = prevRef.current;
      navigationParams.nextEl = nextRef.current;
    }

    swiperRef.current = swiper;

    swiper.on("slideChange", () => {
      setCurrentIndex((swiper.realIndex || 0) + 1);
    });
  }, []);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex };
}
