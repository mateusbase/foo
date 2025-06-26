export interface ImageCarouselProps {
  title?: string;
  description?: string;
  images: {
    alt: string;
    width: number;
    height: number;
    url: string;
    key: string;
  }[];
}

export interface ImageCarouselBlock {
  type: "IMAGE_CAROUSEL";
  id: string;
  data: ImageCarouselProps;
}
