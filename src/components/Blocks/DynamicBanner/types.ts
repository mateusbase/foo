export interface DynamicBannerImage {
  alt: string;
  url: string;
  width: number;
  height: number;
  key?: string;
}

export interface DynamicBannerLink {
  url: string;
  external?: boolean;
}

export interface DynamicBannerProps {
  subtitle?: React.ReactNode;
  title?: string;
  description?: string;
  actionButtonText?: string;
  actionLink?: string;
  serviceIcon?: React.ReactNode;

  image?: DynamicBannerImage;
  logo?: DynamicBannerImage;
  text?: string;
  link?: DynamicBannerLink;

  shouldShowButton?: boolean;
  layout?: "horizontal" | "vertical";
  theme?: "dark" | "light" | "gradient" | "custom";
  textAlign?: "left" | "center" | "right";
  imagePosition?: "left" | "right" | "top" | "bottom";
  customClassName?: string;
  roundedPosition?: "tl" | "tr" | "bl" | "br";
  content?: string;

  press?: boolean;
  event?: boolean;
  campaigns?: boolean;
}
