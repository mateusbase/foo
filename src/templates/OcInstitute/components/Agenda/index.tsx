import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperNavigation } from "@/hooks/useSwiperNavigation";
import { Navigation } from "swiper/modules";
import SliderArrows from "@/components/SliderArrows";
import EventCard from "@/components/EventsCard";
import { events } from "../../mock";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Agenda(): JSX.Element {
  const { nextRef, prevRef, swiperRef, onBeforeInit, currentIndex } =
    useSwiperNavigation();

  return (
    <div className="mt-10 flex w-full flex-col gap-10 lg:flex-row">
      <div className="w-full max-w-[555px]">
        <h1 className="hidden text-left text-[42px] font-light text-darkGray md:flex">
          Agenda 2024
        </h1>
        <h1 className="mt-10 flex text-left text-2xl text-darkGray md:hidden">
          Conheça a agenda dos próximos eventos
        </h1>
        <p className="mt-10 text-left text-darkGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          hendrerit magna sit amet ultricies porttitor. Quisque fringilla ut
          orci a venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Praesent hendrerit magna sit amet ultricies porttitor. Quisque
          fringilla ut orci a venenatis.
        </p>
        <div className="mt-10 flex h-40 w-full cursor-pointer items-end rounded-3xl bg-primary p-10 hover:bg-primary-foreground md:p-6">
          <h1 className="text-left text-2xl font-semibold text-white md:text-4xl md:font-light">
            Agenda 2024
          </h1>
        </div>
      </div>

      <div className="flex w-full max-w-[955px] flex-row gap-10">
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
          }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.title}>
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4 flex justify-center space-x-4 lg:hidden">
        <SliderArrows
          swiperRef={swiperRef}
          prevRef={prevRef}
          nextRef={nextRef}
          showSwiperPagination
          currentIndex={currentIndex}
          size={1}
          color="text-primary"
        />
      </div>
    </div>
  );
}
