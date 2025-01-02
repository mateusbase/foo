import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import EventCard from "../EventsCard";
import { events } from "./eventMocks";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderArrows from "../SliderArrows";

export default function UpcomingEventsSection(): JSX.Element {
  const { nextRef, prevRef, swiperRef } = useSwiperNavigation();

  return (
    <>
      <div className="hidden items-start justify-center gap-4 px-4 py-16 lg:flex">
        <div className="max-w-screen-lg">
          <div className="w-full text-left">
            <h2 className="text-[42px] font-light leading-none text-darkGray">
              Olá dr(a). Conheça a agenda dos próximos eventos Oncoclínicas
            </h2>
            <p className="mt-8 text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              hendrerit magna sit amet ultricies porttitor. Quisque fringilla ut
              orci a venenatis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent hendrerit magna sit amet ultricies
              porttitor. Quisque fringilla ut orci a venenatis.
            </p>
          </div>
        </div>

        <div className="relative w-9/12 max-w-[1052px] md:max-w-[700px] lg:max-w-[1052px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
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
        </div>
      </div>
      <div className="hidden justify-center lg:flex">
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          size={1}
          color="text-primary"
        />
      </div>
    </>
  );
}
