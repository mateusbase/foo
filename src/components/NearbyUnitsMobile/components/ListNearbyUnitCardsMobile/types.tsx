export interface Units {
  id: number;
  unitName: string;
  address: string;
  complement: string;
  city: string;
  hours: string;
  specialties: string[];
}

export interface ListServiceCardsMobileProps {
  units: Units[];
}
