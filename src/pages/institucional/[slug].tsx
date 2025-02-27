import InstitutionalScreen from "@/templates/InstitutionalScreen";
import { institutionalOptions } from "@/templates/InstitutionalScreen/data/institucionalOptions";

const InstitutionalPage = (): JSX.Element => {
  return <InstitutionalScreen options={institutionalOptions} />;
};

export default InstitutionalPage;
