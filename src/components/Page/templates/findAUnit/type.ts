import { ContentBlock } from "@/components/RenderBlocks/types";
import { UnitsCardProps } from "./components/UnitsCards/types";

export interface FindAUnitsRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    search: {
      title: string;
      searchButtonText: string;
      locationButtonText: string;
    };

    unitActions: {
      actionButtonText: string;
      infoButtonText: string;
    };

    units: Array<UnitsCardProps>;
  };
}

export interface MediaImage {
  alt: string;
  width: number;
  key: string;
  url: string;
  height: number;
}

export interface SingleUnitRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    id: string;
    name: string;
    description: string;

    image: {
      alt: string;
      width: number;
      key: string;
      url: string;
      height: number;
    };

    about: string;

    address: {
      street: string;
      number: string;
      complement: string;
      cep: string;
      city: string;
      state: string;
      latitude: string;
      longitude: string;
      mapLink: string;
    };

    segmentation: {
      ocUnit: boolean;
      ocpmUnit: boolean;
      isPartner: boolean;
      type: string;
    };

    urls: {
      externalUrl: string;
      appointmentUrl: string;
      examPortalUrl: string;
      showVirtualTour: boolean;
      virtualTourUrl: string;
    };

    alert: {
      title: string;
      icon: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
      description: string;
      link: {
        external: boolean;
        url: string;
      };
    };

    certifications: Array<{
      icon: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
      name: string;
      description: string;
      url: string;
    }>;

    workingHours: Array<{
      day: string;
      hour: string;
    }>;

    vaccines: string[];
    technicalGroup: string[];
    structure: string[];
    team: string[];

    otherMedia: Array<{
      alt: string;
      width: number;
      key: string;
      url: string;
      height: number;
    }>;

    contact: {
      phone: string;
      email: string;
      whatsapp: string;
      activeWhatsapp: boolean;
    };

    entities: {
      facilities: Array<{
        name: string;
        icon: MediaImage;
        path: string;
      }>;
      services: Array<{
        icon: MediaImage;
        header: {
          title: string;
          description: string;
        };
        addHeadingShortcut: boolean;
        addShare: boolean;
        content: ContentBlock[];
        path: string;
      }>;
      treatments: Array<{
        icon: MediaImage;
        header: {
          title: string;
          description: string;
        };
        addHeadingShortcut: boolean;
        addShare: boolean;
        content: ContentBlock[];
        path: string;
      }>;
      physicianSpecialties: Array<{
        displayConfig: {
          addHeadingShortcut: boolean;
          addShare: boolean;
        };
        content: ContentBlock[];
        basicInfo: {
          name: string;
          icon: MediaImage;
          description: string;
          apiName: string;
        };
        path: string;
      }>;
      healthProviders: Array<{
        name: string;
        path: string;
      }>;
      exams: Array<{
        name: string;
        path: string;
      }>;
    };
  };
}
