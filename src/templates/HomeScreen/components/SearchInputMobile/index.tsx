import { Search } from "lucide-react";
import React from "react";

const SearchInput = (): JSX.Element => {
  return (
    <div className="mt-2 flex h-14 w-full items-center justify-between rounded-full border border-solid border-primary bg-white px-10 font-semibold opacity-85 md:hidden">
      <div className="flex w-full flex-col">
        <input
          type="text"
          aria-label="Search input"
          className="h-full w-full border-none bg-transparent text-base font-bold placeholder-primary outline-none"
          placeholder="Como podemos te ajudar?"
        />
      </div>

      <Search className="text-primary" size={28} />
    </div>
  );
};

export default SearchInput;
