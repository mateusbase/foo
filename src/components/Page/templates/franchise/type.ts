export type CMSImage = {
  alt: string;
  width: number;
  height: number;
  key: string;
  url: string;
};

export interface FranchiseRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    mainBanner: {
      title: string;
      description: string;

      media: {
        type: "image" | "video";
        data: CMSImage;
      };
    };

    location: {
      title: string;
      description: string;
      map: CMSImage;
      sideText: string;
    };

    cards: {
      cards: Array<{
        image: CMSImage;
        title: string;
        description: string;
      }>;

      link: {
        text: string;

        target: {
          external: boolean;
          url: string;
          openOnNewTab: boolean;
        };
      };
    };

    secondaryBanner: {
      title: string;
      description: string;

      media: {
        type: "image" | "video";
        data: CMSImage;
      };
    };

    compareImages: {
      left: CMSImage;
      right: CMSImage;
    };

    form: {
      title: string;
      description: string;
      buttonText: string;
    };

    displayConfig?: {
      addHeadingShortcut: boolean;
      addShare: boolean;
    };
  };
}
