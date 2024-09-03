import EventComponent from "./components/EventComponent";

export default function UpcomingEventsSection(): JSX.Element {
  return (
    <section className="container flex flex-row items-center justify-center py-8">
      <div className="container flex max-w-lg flex-col justify-center">
        <div className="text-left">
          <h2 className="text-6xl font-light text-primary">
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

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <EventComponent
          eventTitle="11º Congresso Internacional Oncoclínicas DANA-FARBER"
          dateEvent="23/09/2023 a 07/10/2023"
          address=""
          eventHour=""
          city=""
          hours=""
        />
      </div>
    </section>
  );
}
