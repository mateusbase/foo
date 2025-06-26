export interface ImageData {
  alt: string;
  width: number;
  height: number;
  key: string;
  url: string;
}

export interface ProjectsAndSponsorshipsRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    disclaimer: string;

    mainBanner: {
      text: string;
      media: {
        type: "image" | "video";
        data: ImageData;
      };
    };

    location: {
      title: string;
      description: string;
      images: ImageData[];
    };

    cards: {
      title: string;
      description: string;
      cards: Array<{
        title: string;
        description: string;
        image: ImageData;
      }>;
    };

    projects: {
      title: string;
      description: string;
      banners: Array<{
        title: string;
        description: string;
        linkText: string;
        link: {
          external: boolean;
          url: string;
          openOnNewTab: boolean;
        };
        image: ImageData;
      }>;
    };

    events: Array<{
      title: string;
      description: string;
      image: ImageData;
    }>;

    banner: {
      title: string;
      description: string;
      linkText: string;
      link: {
        external: boolean;
        url: string;
        openOnNewTab: boolean;
      };
      image: ImageData;
    };

    news: {
      title: string;
      description: string;
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
    };
  };
}

export type ProjectDescription = {
  id: number;
  icon: string;
  title: string;
  description: string;
};
