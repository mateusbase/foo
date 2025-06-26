export interface VideosGalleryRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };
    content: {
      playlistTitle: string;
      viewMoreButton: string;
    };
    playlists: Playlist[];
  };
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  videos: Video[];
}

export interface Video {
  name?: string;
  header?: {
    title: string;
    description: string;
  };
  description: string;
  video: {
    type: "youtube" | "video";
    data: {
      url: string;
    };
  };
  path: string;
}

export interface SingleVideoRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    video: {
      type: string;
      data: {
        url: string;
      };
    };

    name: string;
    description: string;
  };
}
