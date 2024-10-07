import AlphabetSelector from "@/components/AlphabetSelector";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import GlossaryCard from "./components/GlossaryCard";
import { glossaryData } from "./glossaryMock";

export default function GlossaryScreen(): JSX.Element {
  const [selectedLetter, setSelectedLetter] = useState("");

  const selectedGlossary = glossaryData.filter((glossary) =>
    glossary.letter.includes(selectedLetter),
  );

  return (
    <PageLayout
      title="Glossário"
      subtitle="Está com alguma dúvida sobre algum termo utilizado em oncologia? Encontre o significado de termos técnicos para o câncer digitando a palavra desejada ou verifique os termos existentes através de suas letras iniciais ou através dos links abaixo:"
    >
      <div className="flex flex-col">
        <AlphabetSelector
          onLetterSelect={setSelectedLetter}
          selectedLetter={selectedLetter}
          searchPlaceholder="Busque pelo termo"
        />
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {selectedGlossary.map((glossary) => (
            <GlossaryCard
              key={glossary.id}
              letter={glossary.letter}
              terms={glossary.terms}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
