/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
  useEffect,
} from "react";

interface PageData {
  [x: string]: any;
  id: string;
  pageTitle: string;
  content: string;
  path: string;
}

interface TranslationPageData {
  pageTitle: string;
  pageSubtitle?: string;
  heading?: string;
  description?: string;
  placeholderUnitName?: string;
  selectUfLabel?: string;
  buttonText?: string;
  consultationImageAlt?: string;
  additionalInfo?: string;
  path: string;
}

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  results: PageData[];
  setResults: (results: PageData[]) => void;
  pages: PageData[];
  search: (term: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function useSearch(): SearchContextType {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}

export function SearchProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<PageData[]>([]);
  const [pages, setPages] = useState<PageData[]>([]);

  useEffect(() => {
    const loadTranslations = async (): Promise<void> => {
      try {
        const response = await fetch("/locales/pt_BR/common.json");
        const data: { pages: Record<string, TranslationPageData> } =
          await response.json();

        const loadedPages: PageData[] = Object.entries(data.pages).map(
          ([key, page]) => {
            const content = Object.entries(page)
              .filter(([value]) => typeof value === "string")
              .map(([value]) => value)
              .join(" ")
              .toLowerCase();

            return {
              id: key,
              pageTitle: page.pageTitle || "Página Sem Título",
              content,
              path: page.path,
            };
          },
        );

        setPages(loadedPages);
      } catch (error) {
        error;
      }
    };

    loadTranslations();
  }, []);

  const search = (term: string): void => {
    setSearchTerm(term);
    if (term) {
      const filteredResults = pages
        .map((page) => {
          const matchingContent = Object.values(page)
            .filter(
              (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(term.toLowerCase()),
            )
            .join(" ");

          return matchingContent ? { ...page, content: matchingContent } : null;
        })
        .filter((page) => page !== null) as PageData[];
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const contextValue = useMemo(
    () => ({ searchTerm, setSearchTerm, results, setResults, pages, search }),
    [searchTerm, results, pages],
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
