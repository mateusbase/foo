import { DynamicNavigationScreen } from "@/components/DynamicNavigationMenu";
import { clinicalResearchMenuItems } from "@/utils/menuItems";

export default function HowItWorksScreen(): JSX.Element {
  return (
    <DynamicNavigationScreen
      menuItems={clinicalResearchMenuItems}
      basePath="/medicos/pesquisa-clinica/"
    />
  );
}
