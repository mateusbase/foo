import EventComponent from "./components/EventComponent";

export default function UpcomingEventsSection(): JSX.Element {
  return (
    <section className="container flex flex-row items-start justify-center py-16">
      <div className="container mt-8 flex max-w-[536px] flex-col">
        <div className="text-left">
          <h2 className="mt-2 text-6xl font-thin text-primary">
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

      <div className="mt-8 flex flex-row justify-center gap-8">
        <EventComponent
          eventTitle="11º Congresso Internacional Oncoclínicas DANA-FARBER"
          dateEvent="23/09/2023 a 07/10/2023"
          address="Av. das Nações Unidas, 12551 - Brooklin Novo, São Paulo - SP"
          location="WTC Event Center São Paulo"
          eventHour="Das 9h às 19h"
          city=""
          hours=""
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem ullamcorper."
        />
        <EventComponent
          eventTitle="11º Congresso Internacional Oncoclínicas DANA-FARBER"
          dateEvent="23/09/2023 a 07/10/2023"
          address="Av. das Nações Unidas, 12551 - Brooklin Novo, São Paulo - SP"
          location="WTC Event Center São Paulo"
          eventHour="Das 9h às 19h"
          city=""
          hours=""
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque nunc lectus, vitae lacinia ex hendrerit in. Fusce id ex id sem ullamcorper."
        />
      </div>
    </section>
  );
}
