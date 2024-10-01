import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import { builder } from "@builder.io/react";

interface Page {
  id: string;
  data: {
    title?: string;
    description?: string;
    url?: string;
  };
  [key: string]: unknown;
}

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  results: Page[];
  setResults: (results: Page[]) => void;
  pages: Page[];
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
  const [results, setResults] = useState<Page[]>([]);
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    async function fetchPages(): Promise<void> {
      const pagesData = await builder.getAll("page", {
        options: { noTargeting: true },
      });

      const mappedPages: Page[] = pagesData.map((page) => ({
        id: page.id || "",
        data: {
          title: page.data?.title || "",
          description: page.data?.description || "",
          url: page.data?.url || "",
        },
      }));

      setPages(mappedPages);
    }

    fetchPages();
  }, []);

  const contextValue = useMemo(
    () => ({ searchTerm, setSearchTerm, results, setResults, pages }),
    [searchTerm, results, pages],
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
