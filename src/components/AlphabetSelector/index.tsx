/* eslint-disable prettier/prettier */
import { Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";
import BaseInput from "../Input";
import { AlphabetSelectorProps } from "./types";

export default function AlphabetSelector({
  selectedLetter,
  onLetterSelect,
}: AlphabetSelectorProps): JSX.Element {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="mt-28 flex items-center justify-between">
      <div className="flex items-center justify-center gap-[4px]">
        {alphabet.map((letter: string) => (
          <Button
            key={letter}
            onClick={() => onLetterSelect(letter)}
            className={`flex size-[32px] items-center justify-center rounded-full p-0 text-[18px] font-black leading-[22px] ${selectedLetter === letter ? "bg-primary text-white" : "bg-white text-primary"
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
          placeholder="Buscar serviço"
          size="lg"
          radius="full"
          variant="bordered"
          endContent={<Search className="text-2xl text-primary" />}
          className="w-[300px]"
        />
      </div>
    </div>
  );
}
