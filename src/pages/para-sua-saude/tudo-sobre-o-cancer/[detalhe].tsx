import Page from "@/components/Page";
import CancerDetailScreen from "@/templates/CancerDetailScreen";

const CancerDetail = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Tudo sobre o Câncer"
      description="Tudo sobre o Câncer"
    >
      <CancerDetailScreen />
    </Page>
  );
};

export default CancerDetail;
