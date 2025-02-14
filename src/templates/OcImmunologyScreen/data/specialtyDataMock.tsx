import { DermatologyIcon } from "@/components/Icons";
import AllergySpecialty from "@/components/Icons/Specialties/AllergySpecialtyIcon";
import GastroenterologySpecialtyIcon from "@/components/Icons/Specialties/GastroenterologySpecialtyIcon";
import NephrologySpecialtyIcon from "@/components/Icons/Specialties/NephrologySpecialtyIcon";
import NeurologySpecialtyIcon from "@/components/Icons/Specialties/NeurologySpecialtyIcon";
import OtorhinolaryngologySpecialtyIcon from "@/components/Icons/Specialties/OtorhinolaryngologySpecialtyIcon";
import PediatrySpecialtyIcon from "@/components/Icons/Specialties/PediatrySpecialtyIcon";
import PulmonologySpecialtyIcon from "@/components/Icons/Specialties/PulmonologySpecialtyIcon";
import RheumatologySpecialtyIcon from "@/components/Icons/Specialties/RheumatologySpecialtyIcon";

export default interface Specialty {
  id: number;
  name: string;
  image: JSX.Element;
}

export const specialtiesMock: Specialty[] = [
  {
    id: 1,
    name: "Alergia/Imunologia",
    image: <AllergySpecialty />,
  },
  {
    id: 2,
    name: "Dermatologia",
    image: <DermatologyIcon />,
  },
  {
    id: 3,
    name: "Gastroenterologia",
    image: <GastroenterologySpecialtyIcon />,
  },
  {
    id: 4,
    name: "Neurologia",
    image: <NeurologySpecialtyIcon />,
  },
  {
    id: 5,
    name: "Nefrologia",
    image: <NephrologySpecialtyIcon />,
  },
  {
    id: 6,
    name: "Otorrinolaringologia",
    image: <OtorhinolaryngologySpecialtyIcon />,
  },
  {
    id: 7,
    name: "Pediatria",
    image: <PediatrySpecialtyIcon />,
  },
  {
    id: 8,
    name: "Pneumologia",
    image: <PulmonologySpecialtyIcon />,
  },
  {
    id: 9,
    name: "Reumatologia",
    image: <RheumatologySpecialtyIcon />,
  },
];
