export interface GlossaryRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    words: Array<{
      name: string;
      content: string;
    }>;
  };
}
