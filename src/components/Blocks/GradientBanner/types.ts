export interface GradientBannerProps {
  subtitle?: string;
  title?: string;
  description?: string;
  gradientType?: string;

  link?: {
    variant: string;
    text?: string;
    target: {
      external: boolean;
      url: string;
      openOnNewTab: boolean;
    };
  };

  media?: {
    data: {
      type: "image" | "video" | "youtube";
      data: {
        alt?: string;
        width?: number;
        height?: number;
        key?: string;
        url: string;
      };
    };
    side: "left" | "right" | "top" | "bottom";
  };

  theme?: "gradient" | "grey" | "dark-green" | "dark-purple" | "transparent";
  customClassName?: string;
  roundCorner?: "bottom-left" | "bottom-right" | "none";
  content?: string;
  institute?: boolean;

  listItems?: string[];
  isSwiper?: boolean;
}
