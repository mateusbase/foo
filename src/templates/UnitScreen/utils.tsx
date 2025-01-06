import {
  ClinicalOncologyIcon,
  DermatologyIcon,
  HeartIcon,
  HematologyIcon,
  MedicalGeneticsIcon,
  PalliativeMedicineIcon,
} from "@/components/Icons";

export function mapIconsBySpeciality(speciality: string): React.ReactElement {
  const iconSpeciality: Record<string, React.ReactElement> = {
    "cardiologia oncologica": <HeartIcon color="text-primary-foreground" />,
    crioterapia: <HeartIcon color="text-primary-foreground" />,
    dermatologia: <DermatologyIcon color="text-primary-foreground" />,
    "genetica medica": <MedicalGeneticsIcon color="text-primary-foreground" />,
    hematologia: <HematologyIcon color="text-primary-foreground" />,
    "medicina paliativa": (
      <PalliativeMedicineIcon color="text-primary-foreground" />
    ),
    "oncologia clinica": (
      <ClinicalOncologyIcon color="text-primary-foreground" />
    ),
  };

  const normalizedSpeciality = speciality
    .normalize("NFD") // Normaliza a string para remover acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .toLowerCase(); // Converte para minúsculas

  return (
    iconSpeciality[normalizedSpeciality] || (
      <HeartIcon color="text-primary-foreground" />
    )
  );
}
