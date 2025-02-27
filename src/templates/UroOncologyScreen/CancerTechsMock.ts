interface CancerTechsProps {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const cancerTechsMock: CancerTechsProps[] = [
  {
    id: 1,
    title: "Linha de cuidado",
    description:
      "Auxilia no agendamento de consultas e exames, acompanhando o paciente durante todo  o tratamento.",
    icon: "/assets/images/uro-oncology/CancerTechsCard/linhas-de-cuidado.svg",
  },
  {
    id: 2,
    title: "Testes genéticos",
    description:
      "Utilizados na prevenção do câncer e no apoio às decisões terapêuticas dos médicos após o diagnóstico.",
    icon: "/assets/images/uro-oncology/CancerTechsCard/testes-geneticos.svg",
  },
  {
    id: 3,
    title: "Inteligência artificial para o câncer de próstata",
    description:
      "Utilizada na análise de imagens digitalizadas de tumores, com potencial de otimizar em 65% o diagnóstico de tumores de próstata.",
    icon: "/assets/images/uro-oncology/CancerTechsCard/ia.svg",
  },
  {
    id: 4,
    title: "Cirurgia roboótica",
    description:
      "Minimamente invasiva, permite uma recuperação mais rápida e menos dolorosa para o paciente, além de possibilitar maior precisão na remoção do tumor. Proporciona tratamento mais eficaz e seguro para pacientes com câncer de próstata, bexiga e rins.",
    icon: "/assets/images/uro-oncology/CancerTechsCard/cirurgia-robotica.svg",
  },
  {
    id: 5,
    title: "Tratamentos avançados",
    description:
      "Tratamentos personalizados e mais eficazes baseados nas melhores evidências científicas, no cuidado humanizado e na abordagem multidisciplinar, integral e individualizada.",
    icon: "/assets/images/uro-oncology/CancerTechsCard/tratamentos-avançados.svg",
  },
];

export default cancerTechsMock;
