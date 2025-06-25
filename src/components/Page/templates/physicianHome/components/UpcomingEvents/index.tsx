import EventCardMobile from "@/components/Page/templates/physicianHome/components/EventCardMobile";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";
import EventCard from "@/components/Page/templates/events/components/EventsCard";
import BaseSwiper from "@/components/BaseSwiper";
import { UpcomingEventsSectionProps } from "./types";

export default function UpcomingEventsSection(
  incomingWEvents: UpcomingEventsSectionProps,
): JSX.Element {
  const { name, description, events } = incomingWEvents;

  return (
    <div className="my-4 flex flex-col items-start justify-center gap-8 p-4 pb-12 md:mb-2 md:mt-4 md:pb-0 lg:my-4 lg:flex-row lg:pb-12">
      <div className="w-full lg:w-1/3">
        <h2 className="text-xl text-primary lg:text-[42px] lg:font-light lg:leading-none lg:text-darkGray">
          {name}
        </h2>

        <p className="mt-4 hidden text-base text-gray-600 lg:block">
          {description}
        </p>
      </div>

      <div className="w-full lg:w-2/3">
        <BaseSwiper
          data={events}
          renderItem={(event) => (
            <div className="swiper-slide">
              <div className="w-full lg:hidden">
                <EventCardMobile
                  id={event.id}
                  eventName={event.name}
                  dateEvent={event.dateRange}
                  path={event.path}
                />
              </div>

              <div className="hidden lg:block">
                <EventCard key={event.id} {...event} />
              </div>
            </div>
          )}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 2, spaceBetween: 30 },
          }}
        />
      </div>
    </div>
  );
}
