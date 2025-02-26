interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const supportedProjects: Project[] = [
  {
    id: 1,
    title: "Circuito das Estações",
    description:
      "O maior circuito de corridas da América Latina acontece em 4 etapas, cada uma representando uma estação do ano e a oportunidade de buscar um novo objetivo. Em 2024, a Oncoclínicas marcará presença em corridas nas cidades de São Paulo, Rio de Janeiro, Belo Horizonte, Brasília e Salvador.",
    image: "/assets/images/projetos-e-patrocinios/image (10).png",
  },
  {
    id: 2,
    title: "Tucca",
    description:
      "A Oncoclínicas apoia o projeto Música pela Cura da Tucca (Associação para Crianças e Adolescentes com Câncer). Em duas séries musicais, que acontecem anualmente e já fazem parte da agenda cultural paulistana, o projeto contribui para o atendimento integral e gratuito de crianças e adolescentes com câncer em situação de vulnerabilidade social, de todas as regiões do país.",
    image: "/assets/images/projetos-e-patrocinios/image (11).png",
  },
  {
    id: 3,
    title: "IPPE",
    description:
      "O Instituto de Pesquisas e Projetos Empreendedores é uma organização sem fins lucrativos com foco na criação de um futuro autossustentável, em que todos possam desenvolver atividades empreendedoras. A Oncoclínicas apoia na capacitação e resgate de oportunidades de geração de renda à população idosa.",
    image: "/assets/images/projetos-e-patrocinios/image (12).png",
  },
  {
    id: 4,
    title: "Orquestra Maré do Amanhã",
    description:
      "O projeto Orquestra Maré do Amanhã ensina música clássica e contemporânea para jovens em estado de vulnerabilidade social, gerando renda e oportunidade para centenas de adolescentes e suas famílias.",
    image: "/assets/images/projetos-e-patrocinios/image (13).png",
  },
];

export default supportedProjects;
export type { Project };
