import Page from "@/components/Page";
import FindADoctorScreen from "@/templates/FindADoctorScreen";

const FindADoctor = (): JSX.Element => {
  return (
    <Page
      title="Encontre um Médico"
      description="Oncoclínicas - Encontre um Médico"
    >
      <FindADoctorScreen />
    </Page>
  );
};

export default FindADoctor;
