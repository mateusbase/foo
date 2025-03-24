import { DynamicNavigationScreen } from "@/components/DynamicNavigationMenu";
import { pacientSupportMenuItems } from "@/utils/menuItemsPacientSupport";

export default function PacientSupportScreen(): JSX.Element {
  return (
    <DynamicNavigationScreen
      menuItems={pacientSupportMenuItems}
      basePath="/medicina-de-precisao/suporte-ao-paciente"
    />
  );
}
