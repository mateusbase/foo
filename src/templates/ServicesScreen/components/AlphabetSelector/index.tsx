/* eslint-disable prettier/prettier */
import { Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";

interface AlphabetSelectorProps {
  selectedLetter: string;
  onLetterSelect: (letter: string) => void;
}

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
            className={`font-lato flex h-[32px] w-[32px] items-center justify-center rounded-full p-0 text-[18px] font-black leading-[22px] ${selectedLetter === letter ? "bg-primary text-white" : "bg-white text-primary"
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
        <Input
          placeholder="Buscar serviço"
          size="lg"
          radius="full"
          variant="bordered"
          color="primary"
          endContent={<Search className="text-2xl text-primary" />}
          classNames={{
            inputWrapper: ["border-primary", "h-[50px]", "w-[280px]"],
          }}
        />
      </div>
    </div>
  );
}
