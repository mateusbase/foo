interface BenefitsProps {
  id: number;
  description: string;
  icon: string;
}

const benefitsMock: BenefitsProps[] = [
  {
    id: 1,
    description:
      "Prover atendimento individualizado aos pacientes e familiares.",
    icon: "/assets/images/oc-navigation/navigationIcons/image (6).png",
  },
  {
    id: 2,
    description:
      "Ser a referência técnica contínua no monitoramento após o início do tratamento e no esclarecimento de dúvidas, fazendo interface direta com o médico assistente.",
    icon: "/assets/images/oc-navigation/navigationIcons/image (8).png",
  },
  {
    id: 3,
    description:
      "Identificar precocemente eventuais toxicidades inerentes ao tratamento, reduzindo as complicações clínicas.",
    icon: "/assets/images/oc-navigation/navigationIcons/image (9).png",
  },
  {
    id: 4,
    description:
      "Reduzir a fragmentação, duplicação, atrasos e barreiras do cuidado durante o tratamento.",
    icon: "/assets/images/oc-navigation/navigationIcons/image (10).png",
  },
  {
    id: 5,
    description:
      "Estabelecer linhas de comunicação consistentes e eficazes entre os prestadores da linha de cuidados.",
    icon: "/assets/images/oc-navigation/navigationIcons/image (11).png",
  },
  {
    id: 6,
    description: "Fomentar e incentivar o envolvimento ativo do paciente.",
    icon: "/assets/images/oc-navigation/navigationIcons/image (12).png",
  },
];

export default benefitsMock;
