import EventCard from "@/components/EventsCard";
import ServiceCard from "@/components/ServiceCard";
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Service {
  id: number;
  title: string;
  icon: string;
}

interface ListServiceCardsMobileProps {
  services: Service[];
}
export default function ListServiceCardsMobile({
  services,
}: ListServiceCardsMobileProps): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative w-full p-2">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        loop
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        onInit={(swiper) => {
          if (swiper.params.navigation) {
            // eslint-disable-next-line prettier/prettier
            const navigationParams = swiper.params.navigation as NavigationOptions;
            navigationParams.prevEl = prevRef.current;
            navigationParams.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard key={service.id} {...service} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex w-full justify-center space-x-4">
        <button
          ref={prevRef}
          type="button"
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
          aria-label="Previous"
        >
          <IoIosArrowBack
            className="text-primary-foreground dark:text-gray-800"
            size={35}
          />
        </button>

        <button
          ref={nextRef}
          type="button"
          className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 focus:outline-none dark:bg-gray-800/30 dark:hover:bg-gray-800/60"
          aria-label="Next"
        >
          <IoIosArrowForward
            className="text-primary-foreground dark:text-gray-800"
            size={35}
          />
        </button>
      </div>
    </div>
  );
}
