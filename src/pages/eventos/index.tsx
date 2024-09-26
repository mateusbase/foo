import Page from "@/components/Page";
import EventsScreen from "@/templates/EventsScreen";

const Events = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Eventos"
      description="Oncoclínicas - Eventos"
    >
      <EventsScreen />
    </Page>
  );
};

export default Events;
