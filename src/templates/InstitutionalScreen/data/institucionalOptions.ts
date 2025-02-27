export type InstitutionalOption = {
  id: number;
  slug: string;
  serviceTitle: string;
};

export const menuItems = [
  { id: 1, name: "História" },
  { id: 2, name: "Valores" },
  { id: 3, name: "Compromisso" },
  { id: 4, name: "Convênios" },
  { id: 5, name: "Compliance" },
  { id: 6, name: "Parceria Dana-Farber" },
  { id: 7, name: "Segurança" },
  { id: 8, name: "Projetos e Patrocínios" },
  { id: 9, name: "Transparência" },
  { id: 10, name: "Investidores" },
  { id: 11, name: "Carreiras" },
];

export const institutionalOptions: InstitutionalOption[] = menuItems.map(
  (item) => ({
    id: item.id,
    slug: item.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ç/g, "c")
      .replace(/\s+/g, "-")
      .toLowerCase(),
    serviceTitle: item.name,
  }),
);
