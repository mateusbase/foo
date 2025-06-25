import { ContentBlock } from "@/components/RenderBlocks/types";

export interface AppRootProps {
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

export interface SingleAppRootProps {
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

    displayConfig?: {
      addHeadingShortcut: boolean;
      addShare: boolean;
    };

    content: ContentBlock[];
  };
}
