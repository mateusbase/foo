import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import UnitsCardMobile from "../UnitsCard";

interface Units {
  id: number;
  unitName: string;
  address: string;
  complement: string;
  city: string;
  hours: string;
  specialties: string[];
}

interface ListServiceCardsMobileProps {
  units: Units[];
}
export default function ListNearbyUnitCardsMobile({
  units,
}: ListServiceCardsMobileProps): JSX.Element {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="">
      <div className="relative w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={300}
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
          }}
        >
          {units.map((unit) => (
            <SwiperSlide key={unit.id}>
              <UnitsCardMobile key={unit.id} {...unit} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex justify-center space-x-4">
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
    </div>
  );
}
