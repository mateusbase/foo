import { UnitsCardProps } from "../findAUnit/components/UnitsCards/types";

export interface UnitActionsProps {
  actionButtonText: string;
  infoButtonText: string;
  units: UnitsCardProps[];
}

export interface HealthProvidersRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    alert: {
      title: string;
      icon: {
        alt: string;
        width: number;
        height: number;
        key: string;
        url: string;
      };
      description: string;
    };

    unitActions: UnitActionsProps;

    units: UnitsCardProps[];
  };
}
