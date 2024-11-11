import { RefObject } from "react";

export interface NavigationButtonsProps {
  nextRef: RefObject<HTMLButtonElement>;
  prevRef: RefObject<HTMLButtonElement>;
}

export interface CustomSwiperProps {
  slides: Slide[];
  renderSlide: (slide: Slide) => JSX.Element;
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
}

interface Slide {
  id: number;
  title?: string;
  content?: string;
  description?: string;
  icon?: string;
}
