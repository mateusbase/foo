import { ImageData } from "../../types";

export interface LatestNewsSectionProps {
  title: string;
  description?: string;

  entries: Array<{
    title: string;
    subtitle: string;
    description: string;

    link: {
      external: boolean;
      url: string;
      openOnNewTab: boolean;
    };

    image: ImageData;
  }>;
}
