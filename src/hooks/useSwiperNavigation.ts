/* eslint-disable no-param-reassign */
import { UseSwiperNavigationReturn } from "@/utils/swiperNavigation";
import { useRef, useCallback, useEffect } from "react";
import { Swiper as SwiperType } from "swiper/types";

export function useSwiperNavigation(): UseSwiperNavigationReturn {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType>(null);

  const onBeforeInit = useCallback((swiper: SwiperType) => {
    if (
      swiper.params.navigation &&
      typeof swiper.params.navigation !== "boolean"
    ) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return { prevRef, nextRef, swiperRef, onBeforeInit };
}
