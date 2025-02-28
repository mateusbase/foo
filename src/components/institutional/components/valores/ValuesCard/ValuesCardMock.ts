interface ValuesCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const valuesCardMock: ValuesCardProps[] = [
  {
    id: 1,
    title: "Missão",
    description:
      "Vencer o câncer, cuidar das vidas dos pacientes como se fossem as nossas, com um corpo clínico altamente qualificado e as mais avançadas tecnologias para o cuidado integrado e multidisciplinar, sempre baseados em profissionalismo, integridade, humanismo e responsabilidade.",
    icon: "/assets/images/values/missao-card.svg",
  },
  {
    id: 2,
    title: "Visão",
    description:
      "Ser referência mundial em oncologia, aliando excelência médica e cuidado individualizado à competência em gestão.",
    icon: "/assets/images/values/visao-card.svg",
  },
  {
    id: 3,
    title: "Valores",
    description:
      "Nossos valores representam a base do desenvolvimento do nosso trabalho e da assistência integrada, incluindo: integridade; trabalho em equipe; sensação de pertencimento/espírito de dono; simplicidade, objetividade e resolutividade (SOR); foco em resultados; respeito; liderança; responsabilidade social; compromisso com a diversidade e a sustentabilidade e olhar para a inovação constante.",
    icon: "/assets/images/values/valores-card.svg",
  },
];

export default valuesCardMock;
