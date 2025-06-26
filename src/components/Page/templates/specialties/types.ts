import { ContentBlock } from "@/components/RenderBlocks/types";

export interface SpecialtiesRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };
    search: {
      title: string;
    };
    specialties: Array<{
      id: string;
      name: string;
      description?: string;
      apiName?: string;
      icon?: {
        url: string;
        alt: string;
        width: number;
        height: number;
      };
    }>;
  };
}
export interface SingleSpecialtieRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    basicInfo: {
      name: string;
      description: string;
      icon: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
    };

    displayConfig: {
      addHeadingShortcut: boolean;
      addShare: boolean;
    };

    content: ContentBlock[];
  };
}
