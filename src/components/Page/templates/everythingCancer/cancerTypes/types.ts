import { ContentBlock } from "@/components/RenderBlocks/types";

export interface Cancer {
  id: string;
  addHeadingShortcut: boolean;
  addShare: boolean;
  name: string;
  icon: Image;
  isCommon: boolean;
  shortDescription: string;
  categories: Category[];
}

export interface Image {
  alt: string;
  width: number;
  height: number;
  key: string;
  url: string;
}

export interface Category {
  name: string;
  image: Image;
  path: string;
}

export interface CancerTypesProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };
    introduction: {
      title: string;
      description: string;
    };
    commonCancers: {
      title: string;
    };
    cancerTypes: {
      title: string;
      description: string;
    };

    cancers: Cancer[];
  };
}

export interface CancerTypeProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    name: string;
    shortDescription: string;
    icon?: {
      alt: string;
      width: number;
      key: string;
      url: string;
      height: number;
    };
    categories: Array<{
      name: string;
      image: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
      path: string;
    }>;
    addHeadingShortcut?: boolean;
    addShare?: boolean;
    isCommon?: boolean;
    content: ContentBlock[];
  };
}
