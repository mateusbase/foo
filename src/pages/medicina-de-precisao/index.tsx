import Page from "@/components/Page";
import { PrecisionMedicineScreen } from "@/templates/PrecisionMedicineScreen";

const PrecisionMedicine = (): JSX.Element => {
  return (
    <Page title="Medicina de Precisão">
      <PrecisionMedicineScreen media="https://img.freepik.com/free-photo/doctor-from-future-concept_23-2151111116.jpg?t=st=1732801636~exp=1732805236~hmac=7a571240f7bdb5733a846ee376c95faaa9b5b4a096e796239e81276efc99411b&w=1380" />
    </Page>
  );
};

export default PrecisionMedicine;
