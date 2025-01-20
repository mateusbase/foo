import Page from "@/components/Page";
import { NextPageWithLayout } from "@/utils/types";
import SpecialtyScreen from "@/templates/SpecialtyScreen";

const Specialty: NextPageWithLayout = () => {
  return (
    <Page title="Especialidade" description="Oncoclínicas - Especialidade">
      <SpecialtyScreen />
    </Page>
  );
};

export default Specialty;
