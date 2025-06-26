export interface Image {
  alt: string;
  width: number;
  key: string;
  url: string;
  height: number;
}

export interface Category {
  id?: string;
  name: string;
  icon: Image;
  path?: string;
}

export interface Article {
  id?: string;
  date: string;
  relatedArticles: Article[];
  author: string;
  shortDescription: string;
  title: string;
  coverImage: Image;
  category: Category;
  content: string;
  path: string;
}

export interface DisplayArticle {
  title: string;
  description: string;
  article: {
    id?: string;
    date: string;
    relatedArticles: Article[];
    author: string;
    shortDescription: string;
    title: string;
    category: string;
    content: string;
    path: string;
  };

  image: Image;
}

export interface NewsData {
  displayArticles: DisplayArticle[];
  categories: Category[];
  articles: Article[];
}

export interface NewsRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: NewsData;
}

export interface SingleNewRootProps {
  breadcrumbs: Array<{ name: string; path: string }>;

  data: {
    title: string;
    date: string;
    author: string;
    shortDescription: string;

    category: {
      name: string;
      icon: {
        alt: string;
        width: number;
        height: number;
        key: string;
        url?: string;
      };

      path: string;
    };

    relatedArticles: Article[];
    content: string;
  };
}
