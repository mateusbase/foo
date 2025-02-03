import AlphabetSelector from "@/components/AlphabetSelector";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import BaseInput from "@/components/Input";
import { SearchIcon } from "lucide-react";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import { glossaryData } from "./glossaryMock";

export default function GlossaryScreen(): JSX.Element {
  const [selectedLetter, setSelectedLetter] = useState(glossaryData[0].letter);
  const [selectedTerm, setSelectedTerm] = useState("1");

  const filteredGlossary = glossaryData.find(
    (glossary) => glossary.letter === selectedLetter,
  );

  const filteredTerm = filteredGlossary?.terms.find(
    (term) => term.id.toString() === selectedTerm,
  );

  return (
    <PageLayout
      title="Glossário"
      subtitle="Está com alguma dúvida sobre algum termo utilizado em oncologia? Encontre o significado de termos técnicos para o câncer digitando a palavra desejada ou verifique os termos existentes através de suas letras iniciais ou através dos links abaixo:"
    >
      {/* Telas pequenas e médias */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="my-11 flex w-[330px] flex-col items-center gap-4 self-center md:my-5 md:w-full md:flex-row md:gap-6 md:align-middle">
          <BaseInput
            color="primary"
            placeholder="Busque pelo termo"
            placeholderColor="primary"
            size="lg"
            radius="full"
            variant="bordered"
            endContent={<SearchIcon className="text-2xl text-primary" />}
            className="h-[54px] w-full"
          />

          <BaseSelect
            color="primary"
            variant="bordered"
            labelPlacement="outside"
            label=""
            labelColor="primary"
            radius="full"
            defaultSelectedKey={glossaryData[0].letter}
            size="lg"
            className="w-[330px] text-primary"
            borderStyle="border-primary"
            options={glossaryData.map((glossary) => ({
              key: glossary.letter,
              value: glossary.letter,
              label: glossary.letter,
            }))}
            startContent={
              <RxHamburgerMenu size={20} className="text-primary" />
            }
            onChange={(selectedValue: string | number) => {
              setSelectedLetter(selectedValue.toString());
            }}
          />

          <BaseSelect
            color="primary"
            variant="bordered"
            label=""
            labelPlacement="outside"
            labelColor="primary"
            radius="full"
            size="lg"
            className="w-[330px] text-primary"
            borderStyle="border-primary"
            options={
              filteredGlossary?.terms.map((term) => ({
                key: term.id,
                value: term.term,
                label: term.term,
              })) || []
            }
            startContent={
              <RxHamburgerMenu size={20} className="text-primary" />
            }
            onChange={(selectedValue: string | number) => {
              setSelectedTerm(selectedValue.toString());
            }}
          />
        </div>

        {filteredTerm && (
          <div className="mb-9 mt-4 w-[90%] text-left font-lato-regular text-darkGray">
            {filteredTerm.definition.split("\n").map((line) => (
              <p className="my-3">{line}</p>
            ))}
          </div>
        )}
        <div className="mb-10">
          <ShareOptions options={socialNetwork} />
        </div>
      </div>

      {/* Telas grandes */}
      <div className="hidden flex-col lg:flex">
        <AlphabetSelector
          onLetterSelect={(letter: string) => {
            setSelectedLetter(letter);
          }}
          selectedLetter={selectedLetter.toString()}
          searchPlaceholder="Busque pelo termo"
        />
        <div className="mt-8 flex flex-row gap-16">
          <div className="w-1/4 rounded-3xl text-xl text-white">
            {filteredGlossary?.terms.map((terms, index, array) => (
              <MenuItem
                key={terms.id}
                id={terms.id}
                name={terms.term}
                isActive={selectedTerm === terms.id.toString()}
                isFirst={index === 0}
                isLast={index === array.length - 1}
                onClick={(value) => {
                  setSelectedTerm(value.toString());
                }}
              />
            ))}
          </div>

          <div className="flex w-3/4 flex-col">
            {filteredTerm && (
              <div className="size-[90%] justify-start text-left font-lato-regular text-2xl text-darkGray">
                <h1 className="mb-7 text-4xl text-primary">
                  {filteredTerm.term}
                </h1>
                {filteredTerm.definition.split("\n").map((line) => (
                  <p className="my-6">{line}</p>
                ))}
              </div>
            )}

            <ShareOptions options={socialNetwork} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
