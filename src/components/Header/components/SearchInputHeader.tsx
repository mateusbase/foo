import { useState, useEffect } from "react";
import { MicIcon, SearchIcon } from "@/components/Icons";
import apiClient from "@/services/apiClient";
import { Spinner } from "@/components/Spinner";

interface SearchResult {
  path: string;
  title: string;
  description: string;
}

export default function SearchInputHeader(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const fetchResults = async (): Promise<void> => {
      if (!debouncedTerm) {
        setResults([]);

        return;
      }

      setIsLoading(true);

      try {
        const response = await apiClient.post("/api/pages/search", {
          query: debouncedTerm,
          language: "pt",
        });

        setResults(response.data || []);
      } catch {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [debouncedTerm]);

  let searchContent = null;

  if (isLoading) {
    searchContent = (
      <div className="flex justify-center py-4 text-primary">
        <Spinner />
      </div>
    );
  } else if (results.length > 0) {
    searchContent = results.map((item, index) => (
      <a
        key={item.path}
        href={item.path.startsWith("/") ? item.path : `/${item.path}`}
        className={`flex items-center justify-between py-4 text-primary hover:underline ${
          index !== 0 ? "border-t border-gray-300" : ""
        }`}
      >
        <span>{item.title}</span>

        <span className="text-xl text-blue-500">›</span>
      </a>
    ));
  } else if (debouncedTerm) {
    searchContent = (
      <div className="py-4 text-center text-gray-500">
        Nenhum resultado encontrado.
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center rounded-full border border-primary px-6 py-3">
        <input
          type="text"
          placeholder="Buscar"
          className="w-full border-none text-lg text-primary outline-none placeholder:text-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <SearchIcon className="mr-4 text-primary" />

        <MicIcon className="block cursor-pointer text-primary md:hidden" />
      </div>

      {debouncedTerm && (
        <div className="mx-6 mt-6 overflow-y-auto">{searchContent}</div>
      )}
    </div>
  );
}
