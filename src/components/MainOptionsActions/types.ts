export interface MainOptionsActionsProps {
  options: {
    id: number;
    title: string;
    icon: React.ComponentType;
    link?: string | undefined;
  }[];
  rounded?: string;
}
