import { UseSwiperNavigationReturn } from "@/utils/swiperNavigation";
import { useRef, useCallback, useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";

export function useSwiperNavigation(): UseSwiperNavigationReturn {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const onBeforeInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    swiper.on("slideChange", () => {
      setCurrentIndex(swiper.realIndex + 1);
    });
  }, []);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const navigation = swiperRef.current?.params?.navigation;

      if (navigation && typeof navigation !== "boolean") {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
      }

      setTimeout(() => {
        if (swiperRef.current?.navigation) {
          swiperRef.current.navigation.init();
          swiperRef.current.navigation.update();
        }
      }, 5000);
    }
  }, [prevRef, nextRef, swiperRef]);

  return { prevRef, nextRef, swiperRef, onBeforeInit, currentIndex };
}
