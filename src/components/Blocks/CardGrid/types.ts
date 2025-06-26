export interface CardGridProps {
  title?: string;
  description?: string;
  columns?: string;
  orientation?: string;
  backgroundColor?: string;
  centerText?: boolean;
  titlePosition?: "below" | "side";

  cards: Array<{
    title: string;
    description: string;

    icon?: {
      url: string;
      alt?: string;
      width: number;
      height: number;
    };

    link?: {
      url: string;
      external?: boolean;
      openOnNewTab?: boolean;
    };
  }>;
}

export interface CardGridBlock {
  type: "CTA_CARD";
  id: string;
  data: CardGridProps;
}
