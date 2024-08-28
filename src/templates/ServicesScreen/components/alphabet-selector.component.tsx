import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Search } from "lucide-react";

export default function AlphabetSelector() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
  };

  return (
    <div className="flex justify-between items-center mt-28">
      <div className="flex gap-[12px] justify-center items-center">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            className={`flex items-center justify-center w-[32px] h-[32px] font-black text-[18px] leading-[22px] font-lato rounded-full ${selectedLetter === letter
              ? "bg-[#007D77] text-white"
              : "text-[#007D77]"
              }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="flex gap-5 ml-10">
        <Input
          placeholder="Buscar serviço"
          size="lg"
          radius="full"
          variant="bordered"
          endContent={<Search className="text-2xl text-default-400" />}
          className="w-[280px] h-[50px]"
        />
      </div>
    </div>
  );
}
