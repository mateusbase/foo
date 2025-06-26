import { Article } from "./types";

interface category {
  name: string;
  icon?: Image;
  path?: string;
}

interface Image {
  alt: string;
  width: number;
  key: string;
  url: string;
  height: number;
}

type CategoryMapped =
  | { name: string; icon: Image; path: string | undefined }
  | { name: string };

export function extractCategories(articles: Article[]): category[] {
  const categories: CategoryMapped[] = articles
    .map((article) => {
      if (typeof article.category === "object") {
        return {
          name: article.category.name,
          icon: article.category.icon,
          path: article.category.path,
        };
      }
      return { name: article.category as string };
    })
    .filter((cat): cat is CategoryMapped => !!cat.name);

  const uniqueCategories = Array.from(
    new Map(categories.map((cat) => [cat.name, cat])).values(),
  );

  return [{ name: "Todos" }, ...uniqueCategories];
}

export function filterArticlesByCategory(
  articles: Article[],
  selectedCategory: string,
): Article[] {
  if (selectedCategory === "Todos") return articles;

  return articles.filter(
    (article) =>
      typeof article.category === "object" &&
      article.category.name === selectedCategory,
  );
}

export const validate = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) return "E-mail inválido.";
  return "";
};
