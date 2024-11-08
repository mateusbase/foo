import { Swiper as SwiperType } from "swiper/types";

export type SliderArrowsProps = {
  swiperRef: React.RefObject<SwiperType>;
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
};
