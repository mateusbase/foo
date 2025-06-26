import { UnitsCardProps } from "@/components/Page/templates/findAUnit/components/UnitsCards/types";

export interface UnitListProps {
  title?: string;
  description?: string;
  actionButton: string;
  moreInfoButtonText: string;
  units: UnitsCardProps[];
  showSideMenu?: boolean;
}

export interface UnitListBlock {
  type: "UNIT_LIST";
  id: string;
  data: UnitListProps;
}
