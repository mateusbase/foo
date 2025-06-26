import { ContentBlock } from "@/components/RenderBlocks/types";

export interface DynamicTemplateProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    displayConfig?: {
      addHeadingShortcut: boolean;
      addShare: boolean;

      sideLinks?: Array<{
        name: string;
        link: {
          external: boolean;
          url: string;
          openOnNewTab?: boolean;
        };
      }>;
    };

    content: ContentBlock[];
  };
}
