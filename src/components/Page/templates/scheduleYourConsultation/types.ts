type CardItem = {
  icon: {
    alt: string;
    url: string;
    width: number;
    height: number;
    key: string;
  };
  title: string;
  description: string;
  linkText: string;
  link: {
    external: boolean;
    openOnNewTab: boolean;
    path: string;
  };
};

export interface AppointmentsScheduleRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    header: {
      title: string | JSX.Element;
      description: string;
    };

    cards: {
      cards: CardItem[];
    };

    form: {
      title: string;
      description: string;
      buttonText: string;
    };

    image: {
      image: {
        alt: string;
        width: number;
        key: string;
        url: string;
        height: number;
      };
      legend: string;
    };

    units: Array<{
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
      contact: {
        phone: string;
        email: string;
        whatsapp: string;
        activeWhatsapp: boolean;
      };
      workingHours: {
        day: string;
        hour: string;
      }[];
    }>;
  };
}
