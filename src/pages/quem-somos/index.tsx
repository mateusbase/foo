import WhoWeAreScreen from "@/templates/WhoWeAreScreen";
import Page from "@/components/Page";

const WhoWeAre = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Quem Somos"
      description="Informações sobre quem somos na Oncoclínicas"
    >
      <WhoWeAreScreen />
    </Page>
  );
};

export default WhoWeAre;
