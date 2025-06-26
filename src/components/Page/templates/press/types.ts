export interface PressRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    release: {
      description: string;
      title: string;
      subTitle: string;
      image: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
    };

    mediaLink: {
      description: string;
      title: string;
      subTitle: string;
      image: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
    };

    form: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}

export interface ReleasesRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };
    releases: Array<{
      id: string;
      name: string;
      date: string;
      description: string;
      file: {
        name: string;
        type: string;
        key: string;
        url: string;
      };
    }>;
  };
}
export interface ClippingRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    articles: RelatedArticle[];
  };
}
export interface SingleClippingRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    name: string;
    date: string;
    description: string;
    relatedArticles: RelatedArticle[];
    content: string;
  };
}

export interface RelatedArticle {
  name: string;
  date: string;
  description: string;
  author?: string;
  relatedArticles?: string[];
  content?: string;
  path: string;
  image?: {
    alt: string;
    width: number;
    key: string;
    url: string;
    height: number;
  };
}

export interface ClippingCardInfo {
  id: string;
  title: string;
  date: string;
  description: string;
  path?: string;
}
