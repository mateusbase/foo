import Page from "@/components/Page";
import FindAUnitScreen from "@/templates/FindAUnitScreen";

const FindAUnit = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico"
      description="Oncoclínicas - Encontre uma Unidade"
    >
      <FindAUnitScreen />
    </Page>
  );
};

export default FindAUnit;
