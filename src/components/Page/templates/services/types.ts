import { ContentBlock } from "@/components/RenderBlocks/types";

export interface ServicesRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    diagnosis: {
      searchPlaceholder: string;
      title: string;
      description: string;
      expandButtonText: string;

      diagnosis: Array<{
        title: string;
        description: string;
        icon: {
          alt: string;
          width: number;
          height: number;
          key: string;
          url: string;
        };
        path: string;
      }>;

      links: Array<{
        title: string;
        subTitle: string;
        description: string;
        image: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };
        link: {
          external: boolean;
          url: string;
          openOnNewTab: boolean;
        };
      }>;
    };

    services: {
      title: string;
      description: string;
      searchPlaceholder: string;
      expandButtonText: string;

      services: Array<{
        title: string;
        description: string;

        icon: {
          alt: string;
          width: number;
          height: number;
          key: string;
          url: string;
        };

        path: string;
      }>;

      links: Array<{
        title: string;
        subTitle: string;
        description: string;

        image: {
          alt: string;
          width: number;
          height: number;
          key: string;
          url: string;
        };

        link: {
          external: boolean;
          url: string;
          openOnNewTab: boolean;
        };
      }>;
    };

    treatments: {
      searchPlaceholder: string;
      title: string;
      description: string;
      expandButtonText: string;

      treatments: Array<{
        title: string;
        description: string;

        icon: {
          alt: string;
          width: number;
          height: number;
          key: string;
          url: string;
        };

        path: string;
      }>;

      links: Array<{
        title: string;
        subTitle: string;
        description: string;
        image: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };
        link: {
          external: boolean;
          url: string;
          openOnNewTab: boolean;
        };
      }>;
    };
  };
}

export interface SingleServiceRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    icon?: {
      alt: string;
      width: number;
      key: string;
      url: string;
      height: number;
    };

    header: {
      title: string;
      description: string;
    };

    addHeadingShortcut?: boolean;
    addShare?: boolean;

    content: ContentBlock[];
  };
}

export interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  searchPlaceholder: string;
  expandButtonText: string;

  data?: Array<{
    id: string;
    slug: string;
    title: string;
    description: string;
    icon?: {
      alt: string;
      width: number;
      height: number;
      url: string;
      key: string;
    };
  }>;

  links?: Array<{
    id: string;
    title: string;
    subTitle: string;
    description: string;
    actionButtonText?: string;
    image: {
      alt: string;
      width: number;
      height: number;
      url: string;
      key: string;
    };
    link: {
      external: boolean;
      openOnNewTab: boolean;
      url?: string;
      path?: string;
    };
  }>;
}

export interface DeLifeRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;
  data: {
    header: {
      title: string;
      description: string;
    };
    mainBanner: {
      title: string;
      description: string;
      media: {
        type: "image";
        data: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };
      };
    };
    partnerCTA: {
      title: string;
      description: string;
      link: {
        external: boolean;
        url: string;
        openOnNewTab: boolean;
      };
      linkText: string;
    };
    operatorCTA: {
      title: string;
      description: string;
      link: {
        external: boolean;
        url: string;
        openOnNewTab: boolean;
      };
      linkText: string;
    };
    cards: {
      title: string;
      description: string;
      cards: Array<{
        title: string;
        description: string;
      }>;
    };
    form: {
      title: string;
      description: string;
      buttonText: string;
    };
  };
}
