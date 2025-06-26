export interface UnitsCardProps {
  id: string;
  path: string;

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

  workingHours?: Array<{
    day: string;
    hour: string;
  }>;

  name: string;
  actionButtonText: string;
  infoButtonText: string;
  isSmallCard?: boolean;

  segmentation?: {
    ocUnit: boolean;
    ocpmUnit: boolean;
    isPartner: boolean;
    type: string;
  };

  entities: {
    physicianSpecialties?: Array<{
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
    }>;
  };
}
