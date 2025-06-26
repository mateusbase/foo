interface MediaData {
  durationSeconds: number;
  width: number;
  height: number;
  key: string;
  url: string;
  thumbnailUrl: string;
  thumbnailKey: string;
}

export interface VideoCardProps {
  title: string;
  description: string;
  mediaData: MediaData;
}
