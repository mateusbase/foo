export type Exams = {
  id: number;
  name: string;
  redirectUrl?: string;
};

export interface ExamsCardProps {
  exams: Exams[];
}

export const patologicalExams: Exams[] = [
  {
    id: 1,
    name: "Anatomia Patológica & Citopatologia",
  },
  {
    id: 2,
    name: "Imuno-histoquímica",
  },
  {
    id: 3,
    name: "Hibridização Molecular Fluorescente (FISH)",
  },
  {
    id: 4,
    name: "Patologia Digital",
  },
  {
    id: 5,
    name: "Colorações Especiais",
  },
];

export const genomicsExams: Exams[] = [
  {
    id: 1,
    name: "Exames com parceiros",
  },
  {
    id: 2,
    name: "Imuno-histoquímico (IHC)",
  },
  {
    id: 3,
    name: "Painéis NGS germinativos",
    redirectUrl: "/medicina-de-precisao/nossos-exames/genomica",
  },
  {
    id: 4,
    name: "Testes Complementares",
  },
];

export const pacientSupport: Exams[] = [
  {
    id: 1,
    name: "Programa ID Mama (PIK3CA/AKT1/PTEN)",
  },
  {
    id: 2,
    name: "Programa ID Mama (PIK3CA/AKT1/PTEN)",
  },
  {
    id: 3,
    name: "TakeCare - Takeda (PULMÃO)",
  },
  {
    id: 4,
    name: "PD Point - MSD (PULMÃO)",
  },
  {
    id: 5,
    name: "PD Point - MSD (PAN-TUMOR)",
  },
  {
    id: 6,
    name: "RAStrear - AMGEN (COLORRETAL)",
  },
];
