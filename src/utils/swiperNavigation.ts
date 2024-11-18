import { Swiper as SwiperType } from "swiper/types";

export interface UseSwiperNavigationReturn {
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
  swiperRef: React.RefObject<SwiperType>;
  onBeforeInit: (swiper: SwiperType) => void;
}
