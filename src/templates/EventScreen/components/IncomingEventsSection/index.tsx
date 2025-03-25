import EventCard from "@/components/EventsCard";
import { events } from "@/components/UpcomingEvents/eventMocks";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import SliderArrows from "@/components/SliderArrows";

export default function IncomingEventsSection(): JSX.Element {
  const { nextRef, prevRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  return (
    <div className="mb-10 mt-5">
      <h1 className="mb-5 flex justify-center text-[32px] text-primary md:mb-10 md:justify-start md:text-title-lg">
        Próximos eventos
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop
        onBeforeInit={(swiper) => onBeforeInit(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.title}>
            <EventCard key={event.title} event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex justify-center space-x-4 lg:hidden">
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          size={1}
          color="text-primary"
          currentIndex={currentIndex}
          showSwiperPagination
        />
      </div>
    </div>
  );
}
