export interface EveryThingCancerProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    introduction: {
      title: string;
      description: string;
      aside: string;
      categories: Array<{
        title: string;
        description: string;
        icon: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };
      }>;
    };

    commonCancers: {
      title: string;
      description: string;
      navigateButtonText: string;
      cancers: Array<{
        id: string;
        path: string;
        name: string;
        shortDescription: string;
        icon: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };
      }>;
    };

    links: Array<{
      title: string;
      description: string;
      link: {
        external: boolean;
        url: string;
        openOnNewTab: boolean;
      };
      image: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
    }>;
  };
}
