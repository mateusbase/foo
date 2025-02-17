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
  image2?: JSX.Element;
}

export const specialtiesMock: Specialty[] = [
  {
    id: 1,
    name: "Alergia/Imunologia",
    image: <AllergySpecialty />,
    image2: (
      <img
        src="/assets/images/oc-imunologia/allergy.png"
        alt="Alergia/Imunologia"
      />
    ),
  },
  {
    id: 2,
    name: "Dermatologia",
    image: <DermatologyIcon />,
    image2: (
      <img
        src="/assets/images/oc-imunologia/dermatology.png"
        alt="Dermatologia"
      />
    ),
  },
  {
    id: 3,
    name: "Gastroenterologia",
    image: <GastroenterologySpecialtyIcon />,
    image2: (
      <img
        src="/assets/images/oc-imunologia/gastro.png"
        alt="Gastroenterologia"
      />
    ),
  },
  {
    id: 4,
    name: "Neurologia",
    image: <NeurologySpecialtyIcon />,
    image2: (
      <img src="/assets/images/oc-imunologia/neurology.png" alt="Neurologia" />
    ),
  },
  {
    id: 5,
    name: "Nefrologia",
    image: <NephrologySpecialtyIcon />,
    image2: (
      <img src="/assets/images/oc-imunologia/nephro.png" alt="Nefrologia" />
    ),
  },
  {
    id: 6,
    name: "Otorrinolaringologia",
    image: <OtorhinolaryngologySpecialtyIcon />,
    image2: (
      <img
        src="/assets/images/oc-imunologia/oto.png"
        alt="Otorrinolaringologia"
      />
    ),
  },
  {
    id: 7,
    name: "Pediatria",
    image: <PediatrySpecialtyIcon />,
    image2: (
      <img src="/assets/images/oc-imunologia/pediatry.png" alt="Pediatria" />
    ),
  },
  {
    id: 8,
    name: "Pneumologia",
    image: <PulmonologySpecialtyIcon />,
    image2: (
      <img
        src="/assets/images/oc-imunologia/pulmonology.png"
        alt="Pneumologia"
      />
    ),
  },
  {
    id: 9,
    name: "Reumatologia",
    image: <RheumatologySpecialtyIcon />,
    image2: (
      <img
        src="/assets/images/oc-imunologia/rheumatology.png"
        alt="Reumatologia"
      />
    ),
  },
];
