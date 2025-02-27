type Reason = {
  id: number;
  icon: string;
  description: string;
  alt: string;
};

const basePath = "/assets/images/residencia/icons/reasons";

const reasonsMock: Reason[] = [
  {
    id: 1,
    icon: `${basePath}/image 80.svg`,
    description:
      "Além de desenvolver pessoas para treinamento em serviço, nosso programa de residência em oncologia produz as melhores alternativas de tratamento e combate ao câncer.",
    alt: "Icon 1",
  },
  {
    id: 2,
    icon: `${basePath}/image 81.svg`,
    description:
      "Oportunidade de ter uma visão geral sobre oncologia com o time de um dos maiores grupos de oncologia da América Latina.",
    alt: "Icon 2",
  },
  {
    id: 3,
    icon: `${basePath}/image 82.svg`,
    description:
      "Networking com os maiores e mais renomados especialistas de câncer do Brasil e do mundo, abrindo portas para atuar no segmento privado.",
    alt: "Icon 3",
  },
  {
    id: 4,
    icon: `${basePath}/image 83.svg`,
    description:
      "Certificação com a marca Oncoclínicas, agregando valor ao seu currículo",
    alt: "Icon 4",
  },
  {
    id: 5,
    icon: `${basePath}/image 84.svg`,
    description:
      "Apoio de toda a estrutura da OC Medicina de Precisão, colocando o médico em contato direto com a inovação em um centro especializado em oncogenética, patologia e Big Data (BLI).",
    alt: "Icon 5",
  },
  {
    id: 6,
    icon: `${basePath}/image 85.svg`,
    description:
      "Parcerias institucionais com o Dana-Farber Cancer Institute, em Boston, um dos mais renomados centros de pesquisa e tratamento de câncer do mundo, afiliado à Harvard Medical School, e com a Fiocruz, a mais destacada instituição de ciência e tecnologia em saúde da América Latina.",
    alt: "Icon 6",
  },
];

export default reasonsMock;
