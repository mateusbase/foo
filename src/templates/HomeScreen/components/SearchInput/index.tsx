import React from "react";
import { Search } from "lucide-react";
import { useSearch } from "@/contexts/search.context";
import Link from "next/link";

const SearchInputMobile = (): JSX.Element => {
  const { searchTerm, setSearchTerm, results, setResults, pages } = useSearch();

  const handleSearch = (term: string): void => {
    setSearchTerm(term);

    if (term && pages.length > 0) {
      const filteredPages = pages.filter((page) => {
        const titleMatch = page.data?.title
          ?.toLowerCase()
          .includes(term.toLowerCase());

        const descriptionMatch = page.data?.description
          ?.toLowerCase()
          .includes(term.toLowerCase());

        return titleMatch || descriptionMatch;
      });
      setResults(filteredPages);
    } else {
      setResults([]);
    }
  };

  const handleClick = (): void => {
    setSearchTerm("");
    setResults([]);
  };

  return (
    <div className="relative w-3/4 max-w-screen-lg">
      <div className="flex h-28 items-center justify-between rounded-full border border-solid border-primary bg-white px-10 font-semibold opacity-85">
        <div className="flex w-full flex-col">
          <input
            type="text"
            aria-label="Search input"
            className="size-full border-none bg-transparent text-2xl font-bold outline-none placeholder:text-primary"
            placeholder="O que você está procurando?"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <span className="mt-1 text-base text-slate-600">
            Busque por serviços, unidade, sintomas, exames, tratamentos, eventos
            e etc...
          </span>
        </div>

        <Search className="text-primary" size={44} />
      </div>

      {searchTerm && (
        <div className="bg-white px-10 font-semibold opacity-85">
          <div className="absolute left-0 top-full mt-1 w-full rounded-lg bg-white p-4 shadow-lg">
            {results.length > 0 ? (
              results.map((page) => (
                <Link
                  key={page.id}
                  href={page.data?.url || "#"}
                  className="block rounded-lg p-4 transition duration-300 hover:bg-gray-100 hover:text-blue-700"
                  onClick={handleClick}
                >
                  <div className="text-xl font-bold">
                    {page.data?.title || "Página Sem Título"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {page.data?.description || "Sem descrição"}
                  </div>
                </Link>
              ))
            ) : (
              <div className="py-2 text-lg text-gray-500">
                Nenhum resultado encontrado.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInputMobile;
