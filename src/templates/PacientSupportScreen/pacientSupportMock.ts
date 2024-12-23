type PacientSupport = {
  id: number;
  label: string;
  description: string;
  test: string;
  criteriaDescription: string;
  criteria: string;
  informationText: string;
  whatsappContact: string;
  emailContact: string;
};

const pacientSupportMock: PacientSupport[] = [
  {
    id: 1,
    label: "Programa ID Mama (PIK3CA/AKT1/PTEN)",
    description:
      "O ID Mama (PIK3CA/AKT1/PTEN) é  Programa de Suporte ao Paciente da OC Medicina de Precisão em colaboração com a AstraZeneca para pacientes com câncer de mama. Os pacientes elegíveis ao programa ID Mama (PIK3CA/AKT1/PTEN) terão acesso ao respectivo teste:",
    test: "GS Focus (mutações em PIK3CA/AKT1/PTEN e outros 21 genes, DNAseq)",
    criteriaDescription:
      "Critérios de elegibilidade do programa ID Mama (PIK3CA/AKT1/PTEN):",
    criteria:
      "Câncer de mama metastático, RH positivo, HER2 negativo após uso de terapia endócrino + inibidor CDK4/6",
    informationText: "Para mais informações:",
    whatsappContact: "WhatsApp: (11) 2847-5900",
    emailContact: "E-mail: psp@ocpmedicine.com",
  },
  {
    id: 2,
    label: "Programa ID Pulmão (EGFR/ALK/ROS1)",
    description:
      "O ID Pulmão (EGFR/ALK/ROS1) é um Programa de Suporte ao Paciente da OC Medicina de Precisão em colaboração com a Roche para pacientes com câncer de pulmão. Os pacientes elegíveis ao programa ID Pulmão (EGFR/ALK/ROS1) terão acesso ao respectivo teste:",
    test: "GS Focus (mutações em EGFR/ALK/ROS1 e outros 20 genes, DNAseq)",
    criteriaDescription:
      "Critérios de elegibilidade do programa ID Pulmão (EGFR/ALK/ROS1):",
    criteria:
      "Câncer de pulmão não pequenas células, EGFR positivo, ALK positivo ou ROS1 positivo",
    informationText: "Para mais informações:",
    whatsappContact: "WhatsApp: (21) 9876-5432",
    emailContact: "E-mail: psp@ocpmedicine.com",
  },
  {
    id: 3,
    label: "Programa ID Colorretal (KRAS/NRAS/BRAF)",
    description:
      "O ID Colorretal (KRAS/NRAS/BRAF) é um Programa de Suporte ao Paciente da OC Medicina de Precisão em colaboração com a Merck para pacientes com câncer colorretal. Os pacientes elegíveis ao programa ID Colorretal (KRAS/NRAS/BRAF) terão acesso ao respectivo teste:",
    test: "GS Focus (mutações em KRAS/NRAS/BRAF e outros 19 genes, DNAseq)",
    criteriaDescription:
      "Critérios de elegibilidade do programa ID Colorretal (KRAS/NRAS/BRAF):",
    criteria: "Câncer colorretal metastático, KRAS/NRAS/BRAF positivo",
    informationText: "Para mais informações:",
    whatsappContact: "WhatsApp: (31) 9123-4567",
    emailContact: "E-mail: psp@ocpmedicine.com",
  },
];

export default pacientSupportMock;
