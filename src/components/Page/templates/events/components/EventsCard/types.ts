export interface EventsCardProps {
  id: string;
  path: string;
  name?: string;
  description: string;
  subscribeButtonText?: string;
  calendarButtonText?: string;

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

  type?:
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

    type?:
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

    physicians?: Array<{
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
    }>;
  }>;
}
