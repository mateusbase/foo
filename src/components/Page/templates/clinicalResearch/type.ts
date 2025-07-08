import { ContentBlock } from "@/components/RenderBlocks/types";

export interface ClinicalResearchProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    displayConfig?: {
      addHeadingShortcut: boolean;
      addShare: boolean;
    };

    banner: {
      title: string;
      description: string;
      image: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
      link: {
        target: {
          external: boolean;
          url: string;
          openOnNewTab: boolean;
        };
        text: string;
      };
    };

    content: ContentBlock[];
  };
}

export interface SideLink {
  name: string;
  link: {
    external: boolean;
    openOnNewTab: boolean;
    path?: string;
    url?: string;
  };
}
export interface CommitteesRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    teams: Array<{
      name: string;
      physicians: Array<{
        image: {
          alt: string;
          url: string;
          width: number;
          height: number;
          key: string;
        };
        name: string;
        crm: string;
        attributions: string[];
      }>;
    }>;

    displayConfig: {
      sideLinks: Array<SideLink>;
    };
  };
}

interface Form {
  title: string;
  buttonText: string;
}

export interface Study {
  id: string;
  path: string;
  name: string;
  execution: Execution;
  code: string;
  shortDescription: string;
  cancerTypes: CancerType[];
}

export interface ClinicResearchStudiesRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    displayConfig: {
      sideLinks: Array<{
        name: string;
        link: {
          external: boolean;
          openOnNewTab: boolean;
          path?: string;
          url?: string;
        };
      }>;
    };

    form: Form;
    studies: Study[];
  };
}

export interface ClinicResearchFAQRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    displayConfig: {
      sideLinks: Array<{
        name: string;
        link: {
          external: boolean;
          openOnNewTab: boolean;
          path?: string;
          url?: string;
        };
      }>;
    };

    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
}

interface Unit {
  id: string;
  name: string;

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

  technicalGroup: string[];
}

interface Execution {
  researcher: string;
  email: string;
  phone: string;
  unit: Unit;
  showAsCard: boolean;
}

interface CancerTypeIcon {
  alt: string;
  width: number;
  key: string;
  url: string;
  height: number;
}

interface CancerTypeContent {
  type: string;
  data: {
    content: string;
  };
  id: string;
}

interface CancerType {
  addHeadingShortcut: boolean;
  addShare: boolean;
  name: string;
  icon: CancerTypeIcon;
  isCommon: boolean;
  shortDescription: string;
  categories: string[];
  content: CancerTypeContent[];
  path: string;
}

interface CancerTypeEntry {
  cancerType: CancerType;
  icon: CancerTypeIcon;
  color: string;
}

interface ClinicalStudyData {
  name: string;
  code: string;
  shortDescription: string;
  execution: Execution;
  cancerTypes: CancerTypeEntry[];
  content: string;
  moreInfo?: {
    text: string;
    link: {
      external: boolean;
      url: string;
      openOnNewTab: boolean;
    };
  };
}

interface Form {
  title: string;
  buttonText: string;
}

export interface SingleClinicalSearchStudyRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: ClinicalStudyData;
}
