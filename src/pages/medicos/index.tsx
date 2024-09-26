import Page from "@/components/Page";
import DoctorsScreen from "@/templates/DoctorsScreen";

const Doctors = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Encontre um Médico"
      description="Médicos"
    >
      <DoctorsScreen />
    </Page>
  );
};

export default Doctors;
