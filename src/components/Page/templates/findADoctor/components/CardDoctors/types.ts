export interface Doctor {
  id: number | string;
  name: string;
  crm: string;
  specialty?: string[];
  rqe: string;
  location: string;
  imgSrc: string;
  units?: string[];
  path: string;
}

export interface CardDoctorProps {
  doctor: Doctor;
  width?: string;
  onClick?: () => void;
}
