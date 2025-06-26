export interface Media {
  alt: string;
  width: number;
  height: number;
  url: string;
  key: string;
}

export interface InformationItem {
  id?: string;
  logo: Media;
  title: string;
  subtitle?: string;
  description: string;
  image: Media;
}

export interface InformationSliderProps {
  isSwiper?: boolean;
  backgroundType?: "gradient" | "dark";
  items?: InformationItem[];
}
