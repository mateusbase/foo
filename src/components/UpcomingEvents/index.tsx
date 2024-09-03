import Carousel from "./components/Carousel";
import EventComponent from "./components/EventComponent";
import { eventMocks } from "./eventMocks";

export default function UpcomingEventsSection(): JSX.Element {
  return (
    <section className="container flex flex-row items-start justify-center py-16">
      <div className="container flex max-w-[536px] flex-col">
        <div className="text-left">
          <h2 className="text-6xl font-thin text-primary">
            Olá dr(a). Conheça a agenda dos próximos eventos Oncoclínicas
          </h2>
          <p className="mt-8 max-w-sm text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            hendrerit magna sit amet ultricies porttitor. Quisque fringilla ut
            orci a venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Praesent hendrerit magna sit amet ultricies porttitor. Quisque
            fringilla ut orci a venenatis.
          </p>
        </div>
      </div>

      <div className="flex w-[1050px] flex-row justify-center">
        <Carousel>
          {eventMocks.map((event) => (
            <EventComponent
              eventTitle={event.eventTitle}
              dateEvent={event.dateEvent}
              address={event.address}
              location={event.location}
              eventHour={event.eventHour}
              city={event.city}
              hours={event.hours}
              description={event.description}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
