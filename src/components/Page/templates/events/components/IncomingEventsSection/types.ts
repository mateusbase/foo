export interface Event {
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
}
