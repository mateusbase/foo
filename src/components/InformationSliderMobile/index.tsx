import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { InformationSliderMobileProps } from "./types";

export default function InformationSliderMobile({
  image,
}: InformationSliderMobileProps): JSX.Element {
  return (
    <div className="flex w-full">
      <Swiper pagination modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={image} alt="Imagem 1" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}
