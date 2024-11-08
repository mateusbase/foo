import React from "react";
import { useSearch } from "@/contexts/search.context";
import Link from "next/link";
import { SearchIcon } from "@/components/Icons";
import { useTranslation } from "react-i18next";

const SearchInputMobile = (): JSX.Element => {
  const { searchTerm, setSearchTerm, results, search } = useSearch();
  const { t } = useTranslation();

  const handleSearch = (term: string): void => {
    setSearchTerm(term);
    search(term);
  };

  const handleClick = (): void => {
    setSearchTerm("");
  };

  return (
    <div className="relative w-3/4 max-w-screen-lg">
      <div className="flex h-28 items-center justify-between rounded-full border border-solid border-primary bg-white px-10 font-semibold opacity-85">
        <div className="flex w-full flex-col">
          <input
            type="text"
            aria-label={t("searchInput.ariaLabel")}
            className="size-full border-none bg-transparent text-2xl font-bold outline-none placeholder:text-primary"
            placeholder={t("searchInput.placeholder")}
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <span className="mt-1 text-base text-slate-600">
            {t("searchInput.description")}
          </span>
        </div>

        <SearchIcon className="text-primary" size={2} />
      </div>

      {searchTerm && (
        <div className="bg-white px-10 font-semibold opacity-85">
          <div className="absolute left-0 top-full mt-1 w-full rounded-lg bg-white p-4 shadow-lg">
            {results.length > 0 ? (
              results.map((page) => (
                <Link
                  key={page.id}
                  href={page.path}
                  className="block rounded-lg p-4 transition duration-300 hover:bg-gray-100 hover:text-blue-700"
                  onClick={handleClick}
                >
                  <div className="text-xl font-bold">
                    {page.pageTitle || t("searchInput.noTitle")}
                  </div>
                  <div className="text-sm text-gray-600">
                    {page.content || t("searchInput.noDescription")}
                  </div>
                </Link>
              ))
            ) : (
              <div className="py-2 text-lg text-gray-500">
                {t("searchInput.noResults")}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInputMobile;
