import clsx from "clsx";
import BaseInput from "@/components/Input";
import { LoaderCircle, SearchIcon } from "lucide-react";
import { AlphabetSelectorProps } from "./types";

export default function AlphabetSelector({
  selectedLetter,
  onLetterSelect,
  searchPlaceholder,
  handleSearchChange,
  valueSearch,
  loading,
}: AlphabetSelectorProps): JSX.Element {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const activeLetter = selectedLetter ?? "";

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center xl:gap-1">
        {alphabet.map((letter: string) => (
          <button
            type="button"
            key={letter}
            onClick={() => onLetterSelect(letter)}
            className={clsx(
              "flex size-8 items-center justify-center rounded-full p-0 text-lg leading-5",
              {
                "bg-primary text-white": activeLetter === letter,
                "bg-white text-primary hover:text-primary-foreground":
                  activeLetter !== letter,
              },
            )}
            style={{
              height: "32px",
              width: "32px",
              minWidth: "32px",
              padding: "0",
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="ml-8 flex">
        <BaseInput
          placeholder={searchPlaceholder}
          size="lg"
          endContent={
            loading ? (
              <LoaderCircle className="size-5 animate-spin text-primary" />
            ) : (
              <SearchIcon className="text-2xl text-primary" />
            )
          }
          className="w-full min-w-40 border-primary text-primary placeholder:text-primary"
          onChange={handleSearchChange}
          value={valueSearch}
        />
      </div>
    </div>
  );
}
