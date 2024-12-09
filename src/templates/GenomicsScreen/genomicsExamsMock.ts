type MenuItem = {
  label: string;
  value: string;
  exams: Exam[];
};

type Exam = {
  label: string;
  value: string;
};

const genomicsExamsMock: MenuItem[] = [
  {
    label: "Exames com Parceiros",
    value: "1",
    exams: [
      { label: "Signatera®", value: "1-1" },
      { label: "Mammaprint®", value: "1-2" },
      { label: "Oncotype DX®", value: "1-3" },
    ],
  },
  {
    label: "Painéis NGS em Tumor",
    value: "2",
    exams: [
      { label: "Painel de Mutação Tumoral", value: "2-1" },
      { label: "Painel de Fusões Tumorais", value: "2-2" },
      { label: "Painel de Imunoterapia", value: "2-3" },
    ],
  },
  {
    label: "Painéis NGS Germinativos",
    value: "3",
    exams: [
      { label: "Painel Hereditário BRCA1/BRCA2", value: "3-1" },
      { label: "Painel de Síndromes Linfoproliferativas", value: "3-2" },
      { label: "Painel de Predisposição ao Câncer", value: "3-3" },
    ],
  },
  {
    label: "Testes Complementares",
    value: "4",
    exams: [
      { label: "Teste de Expressão Genética", value: "4-1" },
      { label: "Sequenciamento de Sanger", value: "4-2" },
      { label: "Teste de Hibridização Genômica", value: "4-3" },
    ],
  },
];

export default genomicsExamsMock;
