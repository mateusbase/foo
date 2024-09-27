import { IconType } from "react-icons";

export interface MainOptionsActionsProps {
  options: { id: number; title: string; icon: IconType; link: string }[];
  rounded?: string;
}
