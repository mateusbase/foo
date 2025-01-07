import { Button } from "@nextui-org/react";
import clsx from "clsx";
import BaseInput from "../Input";
import { AlphabetSelectorProps } from "./types";
import { SearchIcon } from "../Icons";

export default function AlphabetSelector({
  selectedLetter,
  onLetterSelect,
  searchPlaceholder,
  handleSearchChange,
  valueSearch,
}: AlphabetSelectorProps): JSX.Element {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="mt-20 flex w-[90%] items-center justify-between">
      <div className="flex items-center justify-center xl:gap-1">
        {alphabet.map((letter: string) => (
          <Button
            key={letter}
            onClick={() => onLetterSelect(letter)}
            className={clsx(
              "flex size-8 items-center justify-center rounded-full p-0 text-lg leading-5",
              {
                "bg-primary text-white": selectedLetter === letter,
                "bg-white text-primary": selectedLetter !== letter,
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
          </Button>
        ))}
      </div>

      <div className="ml-8 flex">
        <BaseInput
          color="primary"
          placeholder={searchPlaceholder}
          placeholderColor="primary"
          size="lg"
          radius="full"
          variant="bordered"
          endContent={<SearchIcon className="text-2xl text-primary" />}
          className="w-full min-w-40"
          onChange={handleSearchChange}
          value={valueSearch}
        />
      </div>
    </div>
  );
}
