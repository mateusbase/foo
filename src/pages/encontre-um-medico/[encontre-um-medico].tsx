import Page from "@/components/Page";
import DoctorScreen from "@/templates/DoctorScreen";

const Doctor = (): JSX.Element => {
  return (
    <Page
      title="Oncoclínicas - Referência em tratamento oncológico | Encontre um Médico"
      description="Medico"
    >
      <DoctorScreen />
    </Page>
  );
};

export default Doctor;
