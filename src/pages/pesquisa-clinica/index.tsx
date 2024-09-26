import Page from "@/components/Page";
import ClinicalResearchScreen from "@/templates/ClinicalResearchScreen";

const Doctors = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Pesquisa Clínica"
      description="Pesquisa Clínica"
    >
      <ClinicalResearchScreen />
    </Page>
  );
};

export default Doctors;
