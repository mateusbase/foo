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
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

  return (
    <div className="my-10">
      <h1 className="flex justify-center text-[32px] text-primary md:justify-start md:text-[40px]">
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
            spaceBetween: 20,
          },
          1024: {
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
        />
      </div>
    </div>
  );
}
