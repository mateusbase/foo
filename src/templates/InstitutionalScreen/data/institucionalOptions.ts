export type InstitutionalOption = {
  id: number;
  slug: string;
  serviceTitle: string;
  title?: string;
  subtitle?: string;
};

export const menuItems = [
  {
    id: 1,
    name: "História",
    title: "História",
    slug: "historia",
    subtitle: "Subtitle for História",
  },
  {
    id: 2,
    name: "Valores",
    slug: "valores",
    title: "Oncoclínicas&Co",
    subtitle:
      "Pioneira no país em gestão de serviços oncológicos, a Oncoclínicas&Co foi fundada em 2010 e hoje é um dos maiores centros de oncologia, hematologia e radioterapia da América Latina.",
  },
  {
    id: 3,
    name: "Compromisso",
    title: "Compromisso",
    slug: "compromisso",
    subtitle: "Subtitle for Compromisso",
  },
  {
    id: 4,
    name: "Convênios",
    title: "Convênios",
    slug: "convenios",
    subtitle: "Subtitle for Convênios",
  },
  {
    id: 5,
    name: "Compliance",
    slug: "compliance",
    title: "Programa de compliance",
    subtitle: "",
  },
  {
    id: 6,
    name: "Parceria Dana-Farber",
    slug: "parceria-dana-farber",
    title: "Parceria Dana-Farber",
    subtitle: "Subtitle for Parceria Dana-Farber",
  },
  {
    id: 7,
    name: "Segurança",
    slug: "seguranca",
    title: "Segurança",
    subtitle: "Subtitle for Segurança",
  },
  {
    id: 8,
    name: "Projetos e Patrocínios",
    slug: "projetos-e-patrocinios",
    title: "Projetos e Patrocínios",
    subtitle: "Subtitle for Projetos e Patrocínios",
  },
  {
    id: 9,
    name: "Transparência",
    slug: "relatorio-de-transparencia-salarial",
    title: "Relatório de Transparência Salarial",
    subtitle:
      "Em consonância com nosso compromisso, apresentamos o Relatório de Transparência Salarial conforme estabelecido na Lei nº 14.611/2023, fortalecendo o princípio da igualdade salarial para trabalho de valor equivalente.",
  },
  {
    id: 10,
    name: "Investidores",
    slug: "investidores",
    title: "Investidores",
    subtitle: "Subtitle for Investidores",
  },
  {
    id: 11,
    name: "Carreiras",
    slug: "carreiras",
    title: "Carreiras",
    subtitle: "Subtitle for Carreiras",
  },
];

export const institutionalOptions: InstitutionalOption[] = menuItems.map(
  (item) => ({
    id: item.id,
    slug: item.slug,
    serviceTitle: item.name,
    title: item.title,
    subtitle: item.subtitle,
  }),
);
