import Page from "@/components/Page";
import CampaignsScreen from "@/templates/CampaignsScreen";

const Campaigns = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico"
      description="Oncoclínicas - Encontre uma Unidade"
    >
      <CampaignsScreen />
    </Page>
  );
};

export default Campaigns;
