export interface UnitsCardProps {
  id: number;
  unitName: string;
  address: string;
  complement: string;
  city: string;
  hours: string;
  specialties: string[];
  path: string;
  segmentation: {
    ocUnit: boolean;
    ocpmUnit: boolean;
    isPartner: boolean;
    type: string;
  };
}
