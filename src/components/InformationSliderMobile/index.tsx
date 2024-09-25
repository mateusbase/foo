import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { InformationSliderMobileProps } from "./types";

export default function InformationSliderMobile({
  image,
  alt,
}: InformationSliderMobileProps): JSX.Element {
  return (
    // TODO: Fazer o map, de acordo de como as imagens serão recebidas e ajustar a props
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
