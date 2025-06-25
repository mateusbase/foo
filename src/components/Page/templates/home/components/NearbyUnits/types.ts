export interface UnitsCardProps {
  id: number;
  unitName: string;
  address: string;
  complement: string;
  city: string;
  day: string;
  hours: string;
  specialties: string[];
  isPartner?: boolean;
  path: string;
  appointmentPath: string;
  segmentation: {
    ocUnit: boolean;
    ocpmUnit: boolean;
    isPartner: boolean;
    type: string;
  };
  actionButton: string;
  moreInfoButtonText: string;
}
