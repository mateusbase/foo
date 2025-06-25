import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SearchGradientIcon } from "@/components/Icons";
import apiClient from "@/services/apiClient";
import { cn } from "@/styles/classes";
import { Spinner } from "@/components/Spinner";
import { InputProps } from "./types";

interface SearchResult {
  path: string;
  title: string;
  description: string;
}

interface SearchInputProps {
  data: InputProps;
}

const SearchInput = ({ data }: SearchInputProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
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
      } catch (error) {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [debouncedTerm]);

  const handleClick = (): void => {
    setSearchTerm("");

    setDebouncedTerm("");

    setResults([]);
  };

  return (
    <div className="relative w-3/4 max-w-screen-lg">
      <div
        onClick={() => inputRef.current?.focus()}
        style={{ cursor: "text" }}
        className={cn(
          "border border-solid bg-white px-10 font-semibold transition-[border-color,border-radius,opacity] duration-0 ease-in-out",
          debouncedTerm
            ? "rounded-x-lg rounded-t-lg border-x-primary border-t-primary opacity-95"
            : "rounded-full border-primary opacity-85",
        )}
      >
        <div className="flex h-28 items-center justify-between">
          <div className="flex w-full flex-col">
            <input
              ref={inputRef}
              type="text"
              className="size-full bg-transparent text-2xl font-bold text-primary outline-none placeholder:text-primary"
              placeholder={data.text}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <span className="text-lg text-slate-600">{data.description}</span>
          </div>

          <SearchGradientIcon className="text-primary" size={1} />
        </div>

        {debouncedTerm && (
          <div className="absolute left-0 w-full rounded-b-lg border border-t-0 border-x-primary border-b-primary bg-white px-6 pb-2 pt-0 font-semibold shadow-lg">
            <div className="max-h-80 w-full overflow-y-auto">
              {(() => {
                if (isLoading) {
                  return (
                    <div className="flex items-center justify-center py-4 text-primary">
                      <Spinner />
                    </div>
                  );
                }

                if (results.length > 0) {
                  return results.map((page) => (
                    <Link
                      key={page.path}
                      href={
                        page.path.startsWith("/") ? page.path : `/${page.path}`
                      }
                      className="block rounded-lg px-4 py-2 transition duration-300 hover:bg-gray-100 hover:text-primary"
                      onClick={handleClick}
                    >
                      <div className="text-xl font-bold text-primary">
                        {page.title}
                      </div>

                      <div className="text-sm text-gray-600">
                        {page.description}
                      </div>
                    </Link>
                  ));
                }

                return (
                  <div className="py-2 text-lg text-gray-500">
                    Nenhum resultado encontrado.
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
