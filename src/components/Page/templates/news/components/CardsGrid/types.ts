import { Category, DisplayArticle } from "../../types";

export interface CardsGridProps {
  displayArticles: DisplayArticle[];
  categories: Category[];
  selectedFilter: string;
  onSelectCategory: (id: string) => void;
}
