import Page from "@/components/Page";
import InstitutionalScreen from "@/templates/InstitutionalScreen";
import { institutionalOptions } from "@/templates/InstitutionalScreen/data/institucionalOptions";

export default function Institucional(): JSX.Element {
  return (
    <Page title="Institucional">
      <InstitutionalScreen options={institutionalOptions} />
    </Page>
  );
}
