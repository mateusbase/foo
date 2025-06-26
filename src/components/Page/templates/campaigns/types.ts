export interface CampaignsRootProps {
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
        type: "image" | "video" | "youtube";
        data: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };
      };
      link: {
        external: boolean;
        url: string;
        openOnNewTab: boolean;
      };
      linkText: string;
    };

    content: {
      title: string;
      body: string;
    };

    campaigns: {
      title: string;
      campaigns: Array<{
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
