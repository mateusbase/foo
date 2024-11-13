import Page from "@/components/Page";
import EventScreen from "@/templates/EventScreen";

const Event = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Evento"
      description="Evento"
    >
      <EventScreen />
    </Page>
  );
};

export default Event;
