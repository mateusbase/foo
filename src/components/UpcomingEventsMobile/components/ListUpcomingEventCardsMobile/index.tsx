import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import EventCardMobile from "@/components/EventCardMobile";
import SliderArrows from "@/components/SliderArrows";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { ListUpcomingEventCardsMobileProps } from "./types";

export default function ListUpcomingEventCardsMobile({
  events,
}: ListUpcomingEventCardsMobileProps): JSX.Element {
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

  return (
    <div className="relative w-full max-w-[1052px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCardMobile
              id={event.id}
              eventName={event.title}
              dateEvent={event.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 flex justify-center space-x-4 lg:justify-end">
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          size={1}
          showSwiperPagination
          color="text-primary-foreground"
        />
      </div>
    </div>
  );
}
