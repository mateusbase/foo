import { Swiper as SwiperType } from "swiper/types";

export interface UseSwiperNavigationReturn {
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
  swiperRef: React.MutableRefObject<SwiperType | null>;
  onBeforeInit: (swiper: SwiperType) => void;
}
