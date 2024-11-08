/* eslint-disable no-console */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import EventCardMobile from "@/components/EventCardMobile";
import NavigationButton from "../NavigationButton";
import { ListUpcomingEventCardsMobileProps } from "./types";

export default function ListUpcomingEventCardsMobile({
  events,
}: ListUpcomingEventCardsMobileProps): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
          if (swiper.params.navigation) {
            const navigationParams = swiper.params
              .navigation as NavigationOptions;
            navigationParams.prevEl = prevRef.current;
            navigationParams.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
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
        <NavigationButton
          ref={prevRef}
          onClick={() => console.log("prev")}
          label="Previous"
          icon={
            <IoIosArrowBack
              className="text-primary-foreground dark:text-gray-800"
              size={35}
            />
          }
        />
        <NavigationButton
          ref={nextRef}
          label="Next"
          onClick={() => console.log("prev")}
          icon={
            <IoIosArrowForward
              className="text-primary-foreground dark:text-gray-800"
              size={35}
            />
          }
        />
      </div>
    </div>
  );
}
