export type InformationItem = {
  id?: number;
  subtitle?: string;
  title: string;
  description: string;
  image: string;
};

export interface InformationSliderProps {
  subtitle?: string;
  title?: string;
  description?: string;
  image?: string;
  items?: InformationItem[];
  isSwiper?: boolean;
  backgroundType?: "gradient" | "darkGray";
}
