import { DynamicNavigationScreen } from "@/components/DynamicNavigationMenu";
import Page from "@/components/Page";
import { clinicalResearchMenuItems } from "@/utils/menuItems";

export default function HowItWorksScreen(): JSX.Element {
  return (
    <Page title="Pesquisa Clínica" description="Pesquisa Clínica">
      <DynamicNavigationScreen
        menuItems={clinicalResearchMenuItems}
        basePath="/medicos/pesquisa-clinica"
        enableRouting
      />
    </Page>
  );
}
