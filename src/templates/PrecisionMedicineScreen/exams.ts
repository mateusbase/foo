export type Exams = {
  id: number;
  name: string;
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
    name: "Painéis NGS germinativos)",
  },
  {
    id: 4,
    name: "Testes Complementares",
  },
];
