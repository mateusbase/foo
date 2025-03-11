type ProjectDescription = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const iconPath = "/assets/images/projetos-e-patrocinios/projects-icons/";

const projectDescriptions: ProjectDescription[] = [
  {
    id: 1,
    icon: `${iconPath}image (2).svg`,
    title: "Night Run",
    description:
      "O maior circuito de corridas noturnas do mundo conta com etapas de 5km e 10km, oferecendo aos corredores a oportunidade de praticar o esporte enquanto vivenciam uma experiência única.",
  },
  {
    id: 2,
    icon: `${iconPath}image (3).svg`,
    title: "Din Down Down",
    description:
      "Unindo capoeira e música para construir pontes de inclusão, acessibilidade e cultura, o projeto oferece aulas para pessoas com deficiência e seus cuidadores.",
  },
  {
    id: 3,
    icon: `${iconPath}image (4).svg`,
    title: "Casa de Apoio Solange Fraga",
    description:
      "Crianças e adolescentes em situação de vulnerabilidade social recebem tratamento oncológico e cardíaco no Hospital Santa Izabel, na Bahia",
  },
  {
    id: 4,
    icon: `${iconPath}image (5).svg`,
    title: "Viva + Oncogeriatria São José do Rio Preto",
    description:
      "Idosos em situação de vulnerabilidade social recebem tratamento em clínicas particulares de São José do Rio Preto com isenção de custos.",
  },
  {
    id: 5,
    icon: `${iconPath}image (6).svg`,
    title: "Cisne Negro",
    description:
      "Com objetivo de transformar a realidade de jovens em situação de risco pela arte e dança, a companhia de dança tem participado de inúmeros projetos sociais de arte-educação ao longo de sua trajetória.",
  },
  {
    id: 6,
    icon: `${iconPath}image (7).svg`,
    title: "Instituto Reação",
    description:
      "A organização utiliza o esporte como instrumento educacional e de transformação social para promover o desenvolvimento humano e a integração social.",
  },
  {
    id: 7,
    icon: `${iconPath}image (8).svg`,
    title: "Festival Rolé",
    description:
      "Evento gratuito que une atrações culturais, música e gastronomia ao longo de dois dias, em Belo Horizonte, fomentando a pluralidade de linguagens, a cena cultural mineira e a economia local.",
  },
  {
    id: 8,
    icon: `${iconPath}image (9).svg`,
    title: "Conexão do Bem",
    description:
      "Grupo que atua em hospitais da rede pública de Niterói levando música e teatro como forma de apoio e afeto para pacientes e equipes de saúde.",
  },
  {
    id: 9,
    icon: `${iconPath}image (10).svg`,
    title: "Viva + Oncogeriatria São José do Rio Preto",
    description:
      "Idealizada pela artista Cândida Borges e sediada no Museu de Arte Contemporânea (MAC) Niterói, a exposição utiliza obras em vídeo para mapear a trajetória do homem contemporâneo e a sua relação com as cidades.",
  },
  {
    id: 10,
    icon: `${iconPath}image (11).svg`,
    title: "Viva + Oncogeriatria São José do Rio Preto",
    description:
      "Apoio na construção do templo religioso católico brasileiro em Belo Horizonte, capital do estado de Minas Gerais. Trata-se do último projeto arquitetônico de Oscar Niemeyer para a cidade.",
  },
  {
    id: 11,
    icon: `${iconPath}image (12).svg`,
    title: "Musical Ray",
    description:
      "Chega ao Brasil o musical sobre a vida do cantor norte americano Ray Charles, um dos nomes mais importantes da cena musical mundial e na luta pela equidade de direitos.",
  },
  {
    id: 12,
    icon: `${iconPath}image (13).svg`,
    title: "Espetáculo Clara Nunes",
    description:
      "Idealizado por Vanessa da Mata e dirigido por Jorge Farjalla, o espetáculo surge como uma forma de celebração à brasilidade, trajetória, vida e sensibilidade da cantora que marcou o país.",
  },
];

export default projectDescriptions;
export type { ProjectDescription };
