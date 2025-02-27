import Page from "@/components/Page";
import InstitutionalScreen from "@/templates/InstitutionalScreen";
import { institutionalOptions } from "@/templates/InstitutionalScreen/data/institucionalOptions";

const InstitutionalPage = (): JSX.Element => {
  return (
    <Page title="Institucional">
      <InstitutionalScreen options={institutionalOptions} />
    </Page>
  );
};

export default InstitutionalPage;
