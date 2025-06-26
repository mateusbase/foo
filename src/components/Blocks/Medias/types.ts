export interface MediaItem {
  media: {
    type: "video" | "image" | "youtube";
    data: {
      url: string;
      width: number;
      height: number;
      durationSeconds?: number;
      thumbnailUrl?: string;
      thumbnailKey?: string;
      alt?: string;
    };
  };
  legend?: string;
}

export interface MediasBlockProps {
  title?: string;
  description?: string;
  columns?: string;
  align?: "left" | "center" | "right" | "full-width";
  medias: MediaItem[];
}
