import { Video } from "../../types";

export interface VideoCardSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  videos: Video[];
}
