import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BaseSwiper from "@/components/BaseSwiper";
import EventsCard from "../EventsCard";
import { Event } from "./types";

type IncomingEventsSectionProps = {
  events: Event[];
};

export default function IncomingEventsSection({
  events,
}: IncomingEventsSectionProps): JSX.Element {
  return (
    <div className="mb-10 mt-5">
      <h1 className="mb-5 flex justify-center text-[32px] text-primary md:mb-10 md:justify-start md:text-title-lg">
        Próximos eventos
      </h1>

      <BaseSwiper
        data={events}
        renderItem={(event) => <EventsCard key={event.id} {...event} />}
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
      />
    </div>
  );
}
