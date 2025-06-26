export interface BaseSwiperProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: Record<
    number,
    { slidesPerView: number; spaceBetween?: number }
  >;
  className?: string;
  hasArrows?: boolean;
  shouldLoop?: boolean;
}
