import Page from "@/components/Page";
import VaccinesScreen from "@/templates/VaccinesScreen";

const Vaccines = (): JSX.Element => {
  return (
    <Page title="Vacinas" description="Informações sobre vacinas">
      <VaccinesScreen />
    </Page>
  );
};

export default Vaccines;
