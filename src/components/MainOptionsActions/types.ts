import { MediaImage } from "@/types/page";

export interface MainOptionsActionsProps {
  options: {
    id: number;
    text: string;
    icon: MediaImage;
    link?: {
      url?: string;
      path?: string;
      external: boolean;
    };
  }[];
  rounded?: string;
}
