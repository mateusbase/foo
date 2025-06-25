import EventCard from "@/components/Page/templates/events/components/EventsCard";
import BaseSwiper from "@/components/BaseSwiper";
import { useDeviceType } from "@/hooks/useDeviceType";
import { AgendaProps } from "./types";

export default function Agenda({
  title,
  subtitle,
  events,
}: AgendaProps): JSX.Element {
  const deviceType = useDeviceType();

  return (
    <div className="mt-10 flex w-full flex-col gap-10 lg:flex-row">
      <div className="w-full shrink-0 lg:w-1/4">
        <h1 className="hidden text-left text-[42px] font-light text-darkGray md:flex">
          {title}
        </h1>

        <h1 className="mt-10 flex text-left text-2xl text-darkGray md:hidden">
          {title}
        </h1>

        <p className="mt-10 text-left text-darkGray">{subtitle}</p>

        <div className="mt-10 flex h-40 w-full cursor-pointer items-end rounded-3xl bg-primary p-10 hover:bg-primary-foreground md:p-6">
          <h1 className="text-left text-2xl font-semibold text-white md:text-4xl md:font-light">
            {title}
          </h1>
        </div>
      </div>

      <div className="flex w-full flex-row lg:w-3/4">
        <BaseSwiper
          data={events.map((event) => ({
            ...event,
            id: event.name + event.hour,
          }))}
          hasArrows={deviceType !== "desktop"}
          renderItem={(event) => <EventCard {...event} />}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        />
      </div>
    </div>
  );
}
