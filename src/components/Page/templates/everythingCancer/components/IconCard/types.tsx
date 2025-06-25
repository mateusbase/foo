export interface IconCardProps {
  cardTitle: string;
  cardDescription: string;
  cardIcon: {
    url: string;
    alt?: string;
    width: number;
    height: number;
  };
  showButton?: boolean;
  variant?: "stacked" | "inline";
}
