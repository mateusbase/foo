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

export interface Header {
  title: string;
  description: string;
}

export interface Banner {
  title: string;
  description: string;
  image: MediaImage;
  link: MediaLink;
}

interface Article {
  id?: string;
  path: string;
  date: string;
  relatedArticles: Article[];
  author: string;
  shortDescription: string;
  title: string;
  coverImage: {
    alt: string;
    width: number;
    key: string;
    url: string;
    height: number;
  };
  category: {
    name: string;
    icon: {
      alt: string;
      width: number;
      key: string;
      url: string;
      height: number;
    };
    path: string;
  };
  content: string;
  subscribeForm: {
    buttonText: string;
    title: string;
  };
}

export interface OcJournalRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: Header;
    banner: Banner;
    articles: Article[];
  };
}

export interface SingleJournalRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    title: string;
    date: string;
    author: string;
    shortDescription: string;

    category: {
      name: string;
      icon: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
      path: string;
    };
    relatedArticles: Article[];
    content: string;
    subscribeForm: {
      buttonText: string;
      title: string;
    };
  };
}
