export interface Doctor {
  id: number;
  name: string;
  crm: string;
  specialty: string;
  rqe: string;
  location: string;
  imgSrc: string;
}

export interface CardDoctorProps {
  doctor: Doctor;
  width?: string;
}
