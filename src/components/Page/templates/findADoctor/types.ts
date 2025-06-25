/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FindADoctorRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    search?: {
      title: string;
      searchButtonText: string;
      locationButtonText: string;
    };

    units: Array<{
      id: string;
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
        mapLink?: string;
      };
    }>;

    specialties: Array<{
      id: string;
      name: string;
    }>;
  };
}

export interface ApiPhysician {
  emphasis: string[];
  professionalNumbers: {
    rqes: Array<{
      name: string;
      number: string;
      conferred: boolean;
      cfm: boolean;
    }>;
    crms: Array<{
      number: string;
      state: string;
    }>;
  };
  path: string;
  committees: string[];
  images: {
    background: {
      alt: string;
      width: number;
      key: string;
      url: string;
      height: number;
    };
    picture: {
      alt: string;
      width: number;
      key: string;
      url: string;
      height: number;
    };
  };
  references: {
    specialties: string[];
    units: string[];
  };
  info: {
    name: string;
    description: string;
  };
}

export interface SingleADoctorProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    info: {
      name: string;
      description: string;
      coverage: string;
    };

    images: {
      background: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
      picture: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
    };

    professionalNumbers: {
      crms: Array<{
        number: string;
        state: string;
      }>;
      rqes: Array<{
        name: string;
        number: string;
        conferred: boolean;
        cfm: boolean;
      }>;
    };

    references: {
      specialties: Array<{
        displayConfig: {
          addHeadingShortcut: boolean;
          addShare: boolean;
        };
        content: Array<{
          type: string;
          data: any;
          id: string;
        }>;
        basicInfo: {
          name: string;
          icon: {
            alt: string;
            width: number;
            key: string;
            url: string;
            height: number;
          };
          description: string;
          apiName: string;
        };
        path: string;
      }>;
      units: Array<any>;
    };

    committees: string[];
    emphasis: string[];
  };
}
