import { IconType } from "react-icons";

export interface MainOptionsActionsProps {
  options: {
    id: number;
    title: string;
    icon: React.ComponentType;
    link: string;
  }[];
  rounded?: string;
}
