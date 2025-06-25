export interface MapCardProps {
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

  workingHours: {
    day: string;
    hour: string;
  }[];

  structure: string[];
  team: string[];

  contact: {
    phone: string;
    email: string;
    whatsapp: string;
    activeWhatsapp: boolean;
  };

  shouldShowVirtualTourButton: boolean;

  handleVirtualTourClick: () => void;
}
