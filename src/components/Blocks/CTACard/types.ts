export interface CTACardProps {
  title: string;
  description?: string;
  richTextContent?: string;
  variant?: "border" | "filled";
  text?: string;
  link: {
    external: boolean;
    url: string;
    openOnNewTab: boolean;
  };
  className?: string;
  columns?: string;
}

export interface CTACardGridBlockProps {
  title?: string;
  description?: string;
  columns?: string;
  cards: CTACardProps[];
}
