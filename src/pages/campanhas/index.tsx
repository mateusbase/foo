import Page from "@/components/Page";
import CampaignsScreen from "@/templates/CampaignsScreen";
import dynamic from "next/dynamic";

const NoSSRSwiper = dynamic(() => import("@/templates/CampaignsScreen"), {
  ssr: false,
});

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
