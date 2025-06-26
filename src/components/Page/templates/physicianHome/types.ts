export interface MediaImage {
  alt: string;
  width: number;
  height: number;
  url: string;
  key: string;
}

export interface MediaLink {
  external: boolean;
  url: string;
  openOnNewTab: boolean;
}

export interface DiscoverLink {
  name: string;
  icon: MediaImage;
  link: MediaLink;
}

export interface Discover {
  title: string;
  description: string;
  links: DiscoverLink[];
}

export interface Search {
  description: string;
  text: string;
  backgroundImage: MediaImage;
}

export interface FAQ {
  title: string;
  linkText: string;
  path: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BannerItem {
  title: string;
  description: string;
  image: MediaImage;
  logo?: {
    key: string;
  };
}

export interface MediaItem {
  type: "image" | "video";
  data: MediaImage;
}

export interface MainOptionsAction {
  text: string;
  icon: MediaImage;
  link: MediaLink;
}

export interface Event {
  id: string;
  path: string;
  images: {
    background: MediaImage;
    foreground: MediaImage;
  };
  physicians: Physician[];
  hour: string;
  dateRange: {
    from: string;
    to: string;
  };
  topics: {
    name: string;
    path: string;
  }[];

  name: string;
  description: string;
  location: string;
  interface: {
    name: string;
    path: string;
  };

  events: Event[];
}

interface Physician {
  image: MediaImage;
  name: string;
  crm: string;
  attributions: string[];
}

export interface PhysicianHomeRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    discover: Discover;
    search: Search;
    faq: FAQ;
    banner: BannerItem[];
    media: MediaItem[];
    actions: MainOptionsAction[];
    events: {
      title: string;
      description: string;
      subscribeButtonText: string;
      calendarButtonText: string;
      events: Event[];
    };
  };
}
