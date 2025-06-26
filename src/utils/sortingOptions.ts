export interface SortingOption {
  key: number | string;
  value: string;
  label: string;
}

export interface SortingFilterReturn {
  selectedKey: string | number;
  handleChange: (key: string | number) => void;
}

export const sortingFilterOptions: SortingOption[] = [
  { key: 1, value: "1", label: "Mais relevantes" },
  { key: 2, value: "2", label: "Todos os temas" },
];
