export interface ShareOptionsProps {
  options: ShareOption[];
}
export interface ShareOption {
  id: number;
  name: string;
  icon: React.ReactNode;
  url: string;
}
