import { DynamicNavigationScreen } from "@/components/DynamicNavigationMenu";
import { rightsAndDutiesMenuItems } from "@/utils/menuItems";

export default function RightsAndDutiesScreen(): JSX.Element {
  return (
    <DynamicNavigationScreen
      menuItems={rightsAndDutiesMenuItems}
      basePath="/direitos-e-deveres-do-paciente"
    />
  );
}
