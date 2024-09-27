import { Search } from "lucide-react";
import React from "react";

const SearchInputMobile = (): JSX.Element => {
  return (
    <div className="flex h-28 w-3/4 max-w-screen-lg items-center justify-between rounded-full border border-solid border-primary bg-white px-10 font-semibold opacity-85">
      <div className="flex w-full flex-col">
        <input
          type="text"
          aria-label="Search input"
          className="h-full w-full border-none bg-transparent text-2xl font-bold placeholder-primary outline-none"
          placeholder="O que você está procurando?"
        />

        <span className="mt-1 text-base text-slate-600">
          Busque por serviços, unidade, sintomas, exames, tratamentos, eventos
          etc.
        </span>
      </div>

      <Search className="text-primary" size={44} />
    </div>
  );
};

export default SearchInputMobile;
