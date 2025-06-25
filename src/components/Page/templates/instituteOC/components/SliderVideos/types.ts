interface Media {
  title: string;
  description: string;
  media: {
    type: string;
    data: {
      durationSeconds: number;
      width: number;
      height: number;
      key: string;
      url: string;
      thumbnailUrl: string;
      thumbnailKey: string;
    };
  };
}

export interface SliderVideosProps {
  medias: Media[];
}
