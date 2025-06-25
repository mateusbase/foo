export interface HomeRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    discover: {
      title: string;
      description: string;
      links: Array<{
        name: string;
        icon: {
          alt: string;
          width: number;
          height: number;
          url: string;
          key: string;
        };
        link: {
          external: boolean;
          url: string;
          openOnNewTab: boolean;
        };
      }>;
    };

    search: {
      description: string;
      text: string;
      backgroundImage: {
        alt: string;
        width: number;
        height: number;
        url: string;
        key: string;
      };
    };

    faq: {
      title: string;
      linkText: string;
      path: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };

    banner: Array<{
      title: string;
      description: string;
      image: {
        alt: string;
        width: number;
        height: number;
        url: string;
        key: string;
      };
      logo?: {
        key: string;
      };
    }>;

    units: {
      title: string;
      buttonText: string;
      actionButton: string;
      moreInfoButtonText: string;
      findUnitsPath?: string;
      appointmentPath?: string;
      entries: Array<{
        id: string;
        path: string;
        name: string;
        address: {
          street: string;
          number: string;
          complement?: string;
          cep: string;
          city: string;
          state: string;
          latitude: string;
          longitude: string;
          mapLink: string;
        };
        workingHours?: Array<{
          day: string;
          hour: string;
        }>;
        segmentation: {
          ocUnit: boolean;
          ocpmUnit: boolean;
          isPartner: boolean;
          type: string;
        };
        physicianSpecialties?: string[];
      }>;
    };

    media: Array<{
      type: "image" | "video";
      data: {
        alt: string;
        width: number;
        height: number;
        url: string;
        key: string;
      };
    }>;

    actions: Array<{
      text: string;
      icon: {
        alt: string;
        width: number;
        height: number;
        url: string;
        key: string;
      };
      link: {
        external: boolean;
        url: string;
        openOnNewTab: boolean;
      };
    }>;
  };
}

export interface MediaImage {
  alt: string;
  width: number;
  height: number;
  url: string;
  key: string;
}

export interface MediaLink {
  external: boolean;
  url?: string;
  path?: string;
  openOnNewTab: boolean;
}

export interface MainOptionsAction {
  text: string;
  icon: MediaImage;
  link: MediaLink;
}

export interface MainOptionsActionsProps {
  options: MainOptionsAction[];
  rounded?: string;
}

export interface BannerItem {
  type: string;
  data: {
    url: string;
    alt: string;
    width: number;
    height: number;
    key: string;
  };
}

export interface SliderProps {
  data: BannerItem[];
}

export interface DiscoverLink {
  name: string;
  icon: MediaImage;
  link: MediaLink;
}

export interface Discover {
  title: string;
  description: string;
  links: DiscoverLink[];
}
