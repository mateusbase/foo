import { ContentBlock } from "@/components/RenderBlocks/types";

export interface LinkPath {
  variant?: string;
  external: boolean;
  url?: string;
  openOnNewTab: boolean;
  path?: string;
}

interface Image {
  alt: string;
  width: number;
  height: number;
  key: string;
  url: string;
}

interface VideoMedia {
  type: "video";

  data: {
    durationSeconds: number;
    width: number;
    height: number;
    key: string;
    url: string;
    thumbnailUrl: string;
    thumbnailKey: string;
  };
}

export interface MediaItem {
  title: string;
  description: string;
  media: VideoMedia;
}

export interface ImageLinkItem {
  title: string;
  description: string;
  link: LinkPath;
  image: Image;
}

export interface BannerLinkItem {
  title: string;
  subTitle: string;
  description: string;
  image: Image;
  link: LinkPath;
}

export interface ImageItem {
  alt: string;
  width: number;
  key: string;
  url: string;
  height: number;
}

export interface PhysicianItem {
  name: string;
  image: ImageItem;
  attributions: string[];
  crm: string;
}

export interface EventEntry {
  images: {
    background: ImageItem;
    foreground: ImageItem;
  };
  physicians: PhysicianItem[];
  hour: string;
  dateRange: {
    from: string;
    to: string;
  };
  topics: string[];
  name: string;
  description: string;
  adminConfig: {
    analyticsId: string;
    subscribeEmails: string[];
  };
  location: string;
  type: string;
  path: string;
}

export interface EventsSection {
  title: string;
  description: string;
  entries: EventEntry[];
  subscribeButtonText: string;
  calendarButtonText: string;
}

export interface InstituteOcRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    imageLinks: ImageLinkItem[];

    mainBanner: {
      title: string;
      subtitle: string;
    };

    bannerCards: {
      title: string;
      subTitle: string;
      description: string;
      cards: string[];
    };

    mediaRow: {
      title: string;
      description: string;
      medias: MediaItem[];
    };

    events: EventsSection;

    bannerLinks: BannerLinkItem[];

    partners: {
      title: string;
      description: string;
      images: Array<{
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      }>;
    };
  };
}

export interface GetOnProRootsProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    displayConfig?: {
      addHeadingShortcut: boolean;
      addShare: boolean;
    };

    content: ContentBlock[];
  };
}

export interface ResidencyRootsProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: { title: string; description: string };

    headBanner: {
      image: {
        alt: string;
        width: number;
        height: number;
        key: string;
        url: string;
      };
    };

    signup: {
      image: {
        alt: string;
        width: number;
        height: number;
        key: string;
        url: string;
      };
      title: string;
      date: string;
      signupButtonText: string;
      signupOverText: string;
      signupUrl: string;
      documentUrl: string;
      values: {
        image: {
          alt: string;
          width: number;
          height: number;
          key: string;
          url: string;
        };
        description: string;
      }[];
    };

    cardSection: {
      title: string;
      cards: {
        image: {
          alt: string;
          width: number;
          height: number;
          key: string;
          url: string;
        };
        description: string;
      }[];
    };

    footerBanner: {
      image: {
        alt: string;
        width: number;
        height: number;
        key: string;
        url: string;
      };
      content: string;
    };

    disclaimer: {
      title: string;
      content: string;
    };
  };
}

export interface FellowshipRootsProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    displayConfig?: {
      addHeadingShortcut: boolean;
      addShare: boolean;
    };

    content: ContentBlock[];
  };
}
