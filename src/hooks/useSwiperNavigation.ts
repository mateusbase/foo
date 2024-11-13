/* eslint-disable no-param-reassign */
import { useRef, useCallback, useEffect } from "react";
import { Swiper as SwiperType } from "swiper/types";

export function useSwiperNavigation(): {
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
  swiperRef: React.MutableRefObject<SwiperType | null>;
  onBeforeInit: (swiper: SwiperType) => void;
} {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const onBeforeInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;

    const updatedNavigationParams = {
      ...(typeof swiper.params.navigation !== "boolean"
        ? swiper.params.navigation
        : {}),
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    };

    swiper.params = {
      ...swiper.params,
      navigation: updatedNavigationParams,
    };

    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return { prevRef, nextRef, swiperRef, onBeforeInit };
}
