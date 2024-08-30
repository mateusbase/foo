import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Search } from "lucide-react";

export default function AlphabetSelector(): JSX.Element {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const handleLetterClick = (letter: string): void => {
    setSelectedLetter(letter);
  };

  return (
    <div className="mt-28 flex items-center justify-between">
      <div className="flex items-center justify-center gap-[4px]">
        {alphabet.map((letter: string) => (
          <Button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className={`font-lato flex h-[32px] w-[32px] items-center justify-center rounded-full p-0 text-[18px] font-black leading-[22px] ${selectedLetter === letter
                ? "bg-[#007D77] text-white"
                : "text-[#007D77]"
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
          endContent={<Search className="text-2xl text-default-400" />}
          className="h-[50px] w-[280px]"
        />
      </div>
    </div>
  );
}
