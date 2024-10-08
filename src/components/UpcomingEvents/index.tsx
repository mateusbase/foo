import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { NavigationOptions } from "swiper/types";
import EventCard from "../EventsCard";
import { events } from "./eventMocks";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PreviousArrowIcon from "../Icons/PreviousArrowIcon";
import NextArrowIcon from "../Icons/NextArrowIcon";

export default function UpcomingEventsSection(): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="hidden items-start justify-center gap-8 px-4 py-16 lg:flex">
      <div className="max-w-screen-lg">
        <div className="text-left">
          <h2 className="text-5xl font-thin text-primary">
            Olá dr(a). Conheça a agenda dos próximos eventos Oncoclínicas
          </h2>
          <p className="mt-8 text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            hendrerit magna sit amet ultricies porttitor. Quisque fringilla ut
            orci a venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Praesent hendrerit magna sit amet ultricies porttitor. Quisque
            fringilla ut orci a venenatis.
          </p>
        </div>
      </div>

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
            <SwiperSlide key={event.title}>
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex justify-center space-x-4 lg:justify-end">
          <button
            ref={prevRef}
            type="button"
            className="group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
            aria-label="Previous"
          >
            <PreviousArrowIcon className="text-primary dark:text-gray-800" />
          </button>

          <button
            ref={nextRef}
            type="button"
            className="group flex size-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
            aria-label="Next"
          >
            <NextArrowIcon className="text-primary dark:text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
