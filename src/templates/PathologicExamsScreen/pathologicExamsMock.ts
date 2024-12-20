type MenuItem = {
  label: string;
  value: string;
  description: string;
  relatedTumoralTypes: Exam[];
};

type Exam = {
  label: string;
  value: string;
};

const pathologicExamsMock: MenuItem[] = [
  {
    label: "Anatomia Patológica & Citopatologia",
    value: "1",
    description:
      "A Anatomia Patológica, ou Patologia, é uma especialidade da Medicina que estuda, através de exames macroscópicos e microscópicos de amostras celulares, biópsias e peças cirúrgicas, as alterações causadas por diversas doenças com finalidade diagnóstica.",
    relatedTumoralTypes: [
      {
        label: "Análise de Biópsias Incisional, Excisional e por Agulha",
        value: "1-1",
      },
      { label: "Análise de Exame Peroperatório por Congelação", value: "1-2" },
      { label: "Análise de Peças Cirúrgicas", value: "1-3" },
      { label: "Análise de Peça Cirúrgica Simples e Complexa", value: "1-4" },
      { label: "Citologia Oncótica de Líquidos e Secreções", value: "1-5" },
      {
        label: "Citologia Cervicovaginal (Convencional e Meio líquido)",
        value: "1-6",
      },
      {
        label: "Punção Aspirativa por Agulha Fina (PAAF)",
        value: "1-7",
      },
      {
        label: "Revisão de Lâmina / Segunda Opinião",
        value: "1-8",
      },
    ],
  },
  {
    label: "Imuno-histoquímica (IHC)",
    value: "2",
    description:
      "Método de coloração que identifica proteínas específicas em tecidos, auxiliando na classificação de tumores e na determinação de biomarcadores terapêuticos.",
    relatedTumoralTypes: [
      { label: "Painel para Biomarcadores Tumorais", value: "2-1" },
      { label: "Detecção de Receptores Hormonais", value: "2-2" },
      { label: "Painel de Imunoterapia", value: "2-3" },
    ],
  },
  {
    label: "Hibridização In Situ (ISH)",
    value: "3",
    description:
      "Técnica molecular usada para detectar alterações cromossômicas e genes específicos diretamente em amostras de tecido.",
    relatedTumoralTypes: [
      { label: "Detecção de Amplificação de HER2", value: "3-1" },
      { label: "Identificação de Rearranjos Genéticos", value: "3-2" },
      { label: "Painel de Alterações Genômicas", value: "3-3" },
    ],
  },
  {
    label: "Patologia Digital",
    value: "4",
    description:
      "Uso de tecnologia para digitalizar lâminas e analisar imagens patológicas com maior precisão e eficiência, permitindo revisões remotas e inteligência artificial.",
    relatedTumoralTypes: [
      { label: "Análise Digital de Lâminas", value: "4-1" },
      { label: "Integração com Inteligência Artificial", value: "4-2" },
      { label: "Armazenamento e Compartilhamento Digital", value: "4-3" },
    ],
  },
  {
    label: "Técnicas Avançadas",
    value: "5",
    description:
      "Métodos especializados e complementares para análises moleculares e genéticas, oferecendo suporte ao diagnóstico e prognóstico.",
    relatedTumoralTypes: [
      { label: "Sequenciamento de Nova Geração (NGS)", value: "5-1" },
      { label: "Sequenciamento de Sanger", value: "5-2" },
      { label: "Teste de Expressão Gênica", value: "5-3" },
    ],
  },
];

export default pathologicExamsMock;
