/* eslint-disable prettier/prettier */
import { Button, Input } from "@nextui-org/react";
import BaseInput from "../Input";
import { AlphabetSelectorProps } from "./types";
import { SearchIcon } from "../Icons";

export default function AlphabetSelector({
  selectedLetter,
  onLetterSelect,
  searchPlaceholder,
  handleSearchChange,
  valueSearch
}: AlphabetSelectorProps): JSX.Element {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="mt-20 flex items-center justify-between">
      <div className="flex items-center justify-center gap-1">
        {alphabet.map((letter: string) => (
          <Button
            key={letter}
            onClick={() => onLetterSelect(letter)}
            className={`flex size-8 items-center justify-center rounded-full p-0 text-lg font-black leading-5 ${selectedLetter === letter ? "bg-primary text-white" : "bg-white text-primary"
              }`}
            style={{
              height: "32px",
              width: "32px",
              minWidth: "32px",
              padding: "0",
            }}
          >
            {letter}
          </Button>

        ))}
      </div>

      <div className="ml-10 flex gap-5">
        <BaseInput
          color="primary"
          placeholder={searchPlaceholder}
          size="lg"
          radius="full"
          variant="bordered"
          endContent={<SearchIcon className="text-2xl text-primary" />}
          className="w-[300px]"
          onChange={handleSearchChange}
          value={valueSearch}
        />
      </div>
    </div>
  );
}
