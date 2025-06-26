import { ContentBlock } from "@/components/RenderBlocks/types";

export interface VaccinesRootProps {
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

    cards: Array<{
      image: {
        alt: string;
        width: number;
        height: number;
        url: string;
        key: string;
      };
      title: string;
      description: string;
    }>;

    banner: {
      left: {
        image: {
          alt: string;
          width: number;
          height: number;
          url: string;
          key: string;
        };
        title: string;
        description: string;
      };
      right: {
        image: {
          alt: string;
          width: number;
          height: number;
          url: string;
          key: string;
        };
        title: string;
        description: string;
      };
    };

    units: {
      title: string;
      description: string;
      entries: Unit[];
    };

    content: ContentBlock[];
  };
}

export interface Unit {
  id: string;
  title: string;
  description: string;

  name: string;

  image: {
    alt: string;
    width: number;
    key: string;
    url: string;
    height: number;
  };

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

  technicalGroup: string[];
  vaccines: string[];
}
