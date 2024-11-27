import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/SliderArrows";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { videosContents } from "../../mock";
import VideoCard from "../VideoCard";

export default function SliderVideos(): JSX.Element {
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {videosContents.map((content) => (
          <SwiperSlide key={content.id}>
            <VideoCard
              title={content.title}
              description={content.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 flex justify-center space-x-4">
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          size={1}
          color="text-primary"
        />
      </div>
    </div>
  );
}
