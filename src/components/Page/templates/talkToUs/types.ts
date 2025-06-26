export interface TalkToUsRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    banner?: {
      image: {
        url: string;
        alt: string;
        width: number;
        height: number;
        key: string;
      };

      content: string;
    };

    secondaryBanner?: {
      link: {
        external: boolean;
        url: string;
      };

      image: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };

      logo: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };

      text: string;
    };

    units: Array<{
      id: string;
      name: string;
      address: {
        street: string;
        number: string;
        complement: string;
        cep: string;
        city: string;
        state: string;
        latitude: string;
        longitude: string;
        mapLink: string;
      };
    }>;
  };
}
