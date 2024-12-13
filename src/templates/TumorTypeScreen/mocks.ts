type TumorTypes = {
  icon: string;
  title: string;
};

type Exam = {
  id: number;
  name: string;
};

type ExamCategory = {
  category: string;
  exams: Exam[];
};

export type TumorType = {
  id: number;
  key: string | number;
  value: string | number;
  label: string;
  title: string;
  icon: string;
  description?: string;
  metodologies?: string[];
  examCategories: ExamCategory[];
  types: TumorTypes[];
};

const tumorTypes: TumorType[] = [
  {
    key: 1,
    id: 1,
    value: 1,
    label: "Adenocarcinoma",
    title: "Jornada molecular Bexiga",
    icon: "/assets/images/tumoralicon.png",
    description:
      "Em tumores de bexiga, a avaliação IHQ de PDL1 associada à detecção de fusões e mutações nos genes FGFR2 e FGFR3, entre outros, por NGS, podem aumentar as opções terapêuticas que incluem terapias-alvo e imunoterapia.",
    metodologies: [
      "IHQ: Imuno-histoquímica",
      "NGS: Sequenciamento de nova geração",
    ],
    examCategories: [
      {
        category: "PDL1",
        exams: [{ id: 1, name: "PDL1" }],
      },
      {
        category: "GS",
        exams: [
          { id: 2, name: "GS Infinity - Painel amplo DNA/RNA" },
          { id: 3, name: "GS Focus Ampliado - Painel dirigido DNA" },
          { id: 4, name: "GS Focus Liquid" },
          { id: 5, name: "GS Hereditário" },
        ],
      },
    ],
    types: [
      {
        icon: "/assets/images/colorretal.png",
        title: "Colorretal",
      },
      {
        icon: "/assets/images/prostate.png",
        title: "Próstata",
      },
      {
        icon: "/assets/images/viabiliar.png",
        title: "Via biliar",
      },
    ],
  },
  {
    key: 2,
    id: 2,
    value: 2,
    label: "Carcinoma de células escamosas",
    title: "Jornada molecular Pulmão",
    icon: "/assets/images/tumoralicon.png",
    description:
      "No carcinoma de células escamosas, a detecção de biomarcadores como EGFR, ALK e ROS1 pode guiar terapias específicas e imunoterapias.",
    metodologies: [
      "PCR: Reação em cadeia da polimerase",
      "FISH: Hibridização in situ fluorescente",
    ],
    examCategories: [
      {
        category: "PCR",
        exams: [
          { id: 6, name: "EGFR" },
          { id: 7, name: "KRAS" },
          { id: 8, name: "PIK3CA" },
        ],
      },
      {
        category: "FISH",
        exams: [
          { id: 9, name: "ALK" },
          { id: 10, name: "ROS1" },
          { id: 11, name: "MET" },
        ],
      },
    ],
    types: [
      { icon: "https://img.icons8.com/ios/452/test-tube.png", title: "PCR" },
      { icon: "https://img.icons8.com/ios/452/dna.png", title: "FISH" },
    ],
  },
  {
    key: 3,
    id: 3,
    value: 3,
    label: "Sarcoma",
    title: "Jornada molecular Sarcoma",
    icon: "/assets/images/tumoralicon.png",
    description:
      "Para sarcomas, o diagnóstico molecular pode incluir a identificação de rearranjos cromossômicos e fusões genéticas.",
    metodologies: ["NGS: Sequenciamento de nova geração", "RT-PCR"],
    examCategories: [
      {
        category: "Fusões Genéticas",
        exams: [
          { id: 12, name: "EWSR1-FLI1" },
          { id: 13, name: "SYT-SSX1/2" },
        ],
      },
      {
        category: "Rearranjos Cromossômicos",
        exams: [
          { id: 14, name: "PDGFRA" },
          { id: 15, name: "KIT" },
        ],
      },
    ],
    types: [
      {
        icon: "https://img.icons8.com/ios/452/molecular-biology.png",
        title: "Fusões Genéticas",
      },
      {
        icon: "https://img.icons8.com/ios/452/microscope.png",
        title: "Rearranjos Cromossômicos",
      },
    ],
  },
  {
    key: 4,
    id: 4,
    value: 4,
    label: "Linfoma",
    title: "Jornada molecular Linfoma",
    icon: "/assets/images/tumoralicon.png",
    description:
      "Linfomas frequentemente requerem análise de rearranjos de genes imunoglobulínicos e biomarcadores específicos para diagnóstico preciso.",
    metodologies: ["IHQ: Imuno-histoquímica", "NGS"],
    examCategories: [
      {
        category: "IHQ",
        exams: [
          { id: 16, name: "CD20" },
          { id: 17, name: "CD3" },
        ],
      },
      {
        category: "NGS",
        exams: [
          { id: 18, name: "MYD88" },
          { id: 19, name: "BCL2" },
        ],
      },
    ],
    types: [
      { icon: "https://img.icons8.com/ios/452/microscope.png", title: "IHQ" },
      { icon: "https://img.icons8.com/ios/452/dna.png", title: "NGS" },
    ],
  },
  {
    key: 5,
    id: 5,
    value: 5,
    label: "Melanoma",
    title: "Jornada molecular Melanoma",
    icon: "/assets/images/tumoralicon.png",
    description:
      "O melanoma metastático pode ser tratado com terapias direcionadas baseadas em mutações BRAF e NRAS.",
    metodologies: ["PCR", "NGS"],
    examCategories: [
      {
        category: "Mutação",
        exams: [
          { id: 20, name: "BRAF V600E" },
          { id: 21, name: "NRAS" },
        ],
      },
      {
        category: "NGS",
        exams: [{ id: 22, name: "Painel NGS - Tumores Sólidos" }],
      },
    ],
    types: [
      { icon: "https://img.icons8.com/ios/452/dna.png", title: "NGS" },
      {
        icon: "https://img.icons8.com/ios/452/test-tube.png",
        title: "Mutação",
      },
    ],
  },
];

export default tumorTypes;
