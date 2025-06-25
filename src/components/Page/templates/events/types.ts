export interface EventsRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    mainEvent: {
      title: string;
      description: string;

      image: {
        alt: string;
        width: number;
        height: number;
        key: string;
        url: string;
      };

      link: {
        text: string;
        target: {
          external: boolean;
          url: string;
          openOnNewTab: boolean;
        };
      };
    };

    events: Array<{
      id: string;
      path: string;
      name: string;
      description: string;
      dateRange: {
        from: string;
        to: string;
      };

      hour: string;
      location: string;
      images: {
        background: {
          alt: string;
          width: number;
          height: number;
          key: string;
          url: string;
        };

        foreground: {
          alt: string;
          width: number;
          height: number;
          key: string;
          url: string;
        };
      };

      type:
        | {
            name: string;
            path: string;
          }
        | string;

      topics: Array<
        | {
            name: string;
            path: string;
          }
        | string
      >;

      events?: Array<{
        id: string;
        path: string;
        name: string;
        description: string;
        dateRange: {
          from: string;
          to: string;
        };

        hour: string;
        location: string;

        images: {
          background: {
            alt: string;
            width: number;
            height: number;
            key: string;
            url: string;
          };

          foreground: {
            alt: string;
            width: number;
            height: number;
            key: string;
            url: string;
          };
        };

        type: string;
        topics: string[];
      }>;
    }>;

    eventTopics: Array<{
      id: string;
      name: string;
    }>;

    eventTypes: Array<{
      id: string;
      name: string;
    }>;
  };
}

export interface SingleEventRootProps {
  breadcrumbs?: Array<{ name: string; path: string }>;

  id: string;

  data: {
    name: string;
    description: string;
    dateRange: {
      from: string;
      to: string;
    };

    hour: string;
    location: string;

    type: {
      name: string;
      path: string;
    };

    topics: {
      name: string;
      path: string;
    }[];

    physicians: {
      image: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };

      name: string;
      crm: string;
      attributions: string[];
    }[];

    images: {
      background: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };

      foreground: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
    };

    events: {
      id: string;
      path: string;

      images: {
        background: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };

        foreground: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };
      };

      physicians: {
        image: {
          alt: string;
          width: number;
          key: string;
          url: string;
          height: number;
        };

        name: string;
        crm: string;
        attributions: string[];
      }[];

      hour: string;
      dateRange: {
        from: string;
        to: string;
      };

      topics: {
        name: string;
        path: string;
      }[];

      name: string;
      description: string;
      location: string;

      type: {
        name: string;
        path: string;
      };
    }[];
  };
}
