import { Category } from "../news/types";

export interface MediaData {
  alt: string;
  width: number;
  key: string;
  url: string;
  height: number;
}

export interface Media {
  data: {
    type: "image" | "video";
    data: MediaData & {
      durationSeconds?: number;
      thumbnailUrl?: string;
      thumbnailKey?: string;
    };
  };
  side: "left" | "right";
}

export interface Link {
  external: boolean;
  url: string;
  openOnNewTab?: boolean;
}

export interface Banner {
  title: string;
  subtitle: string;
  description: string;
  gradientType: string;
  roundCorner: string;
  media: Media;
  link: {
    target: Link;
    text: string;
    variant: string;
  };
}

export interface KeyValue {
  title: string;
  description: string;
}

export interface CardLink {
  name: string;
  link: Link;
}

export interface ImageCardLink {
  image: MediaData;
  name: string;
  link: Link;
}

export interface ExamGroup {
  name: string;
  links: CardLink[];
}

export interface Certification {
  icon: MediaData;
  name: string;
  description: string;
  url: string;
}

export interface Unit {
  name: string;
  description: string;
  about: string;
  image: MediaData;
  address: {
    number: string;
    city: string;
    street: string;
    latitude: string;
    state: string;
    complement: string;
    mapLink: string;
    cep: string;
    longitude: string;
  };
  technicalGroup: string[];
  team: string[];
  certifications: Certification[];
  structure: string[];
  otherMedia: MediaData[];
  hiddenInfo: {
    tasyId: string;
    code: string;
    examEmails: string[];
    hasOnlineAppointments: boolean;
    contactEmails: string[];
    sgmCode: string;
    cnpj: string;
  };
  urls: {
    externalUrl: string;
    appointmentUrl: string;
    showVirtualTour: boolean;
    virtualTourUrl: string;
    examPortalUrl: string;
  };
  alert: {
    icon: MediaData;
    link: Link;
    description: string;
    title: string;
  };
  contact: {
    whatsapp: string;
    phone: string;
    email: string;
    activeWhatsapp: boolean;
  };
  segmentation: {
    isPartner: boolean;
    type: string;
    ocUnit: boolean;
    ocpmUnit: boolean;
  };
  workingHours: {
    hour: string;
    day: string;
  }[];
  path: string;
}

export interface CTASection {
  title: string;
  description: string;
  buttonText: string;
  placeholder?: string;
  link?: Link;
  subscribeEmails?: string[];
}

export interface PrecisionMedicineRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
      image: MediaData;
    };

    banner: Banner;
    values: {
      keyValues: KeyValue[];
      description: string;
    };
    cardLinks: CardLink[];
    banner2: Banner;
    exams: {
      title: string;
      groups: ExamGroup[];
    };
    banner3: Banner;
    imageCardLinks: ImageCardLink[];
    banner4: Banner;
    unitReference: {
      title: string;
      buttonText: string;
      secondaryButtonText: string;
      units: Unit[];
    };
    ctas: {
      contact: CTASection;
      molecularThursdays: CTASection;
      pathologicThursdays: CTASection;
    };
    banner5: Banner;
    certifications: {
      title: string;
      entries: {
        name: string;
        image: MediaData;
      }[];
    };
  };
}

export interface Article {
  id?: string;
  date: string;
  relatedArticles: Article[];
  author: string;
  shortDescription: string;
  coverImage?: MediaData;
  title: string;
  category: Category;
  content: string;
  path: string;
}

export interface MolecularThursdaysRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string;
      description: string;
    };

    mainBanner: Banner;

    cta: {
      title: string;
      description: string;
      buttonText: string;
      placeholder?: string;
    };

    articles: Article[];
  };
}
