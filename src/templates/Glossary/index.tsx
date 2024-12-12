import AlphabetSelector from "@/components/AlphabetSelector";
import PageLayout from "@/components/PageLayout";
import { useState } from "react";
import MenuItem from "@/components/MenuItem";
import BaseInput from "@/components/Input";
import { SearchIcon } from "lucide-react";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import { glossaryData } from "./glossaryMock";
import socialNetwork from "./socialNetwork";

export default function GlossaryScreen(): JSX.Element {
  const [selectedLetter, setSelectedLetter] = useState(glossaryData[0].letter);
  const [selectedTerm, setSelectedTerm] = useState("");

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
            optionsColor="primary"
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
            optionsColor="primary"
            startContent={
              <RxHamburgerMenu size={20} className="text-primary" />
            }
            onChange={(selectedValue: string | number) => {
              setSelectedTerm(selectedValue.toString());
            }}
          />
        </div>

        {filteredTerm && (
          <div className="mb-9 mt-4 w-[90%] text-left font-lato-regular">
            {filteredTerm.definition.split("\n").map((line) => (
              <p className="my-3">{line}</p>
            ))}
          </div>
        )}

        <h3 className="mb-4 self-center text-center text-xl text-primary md:self-start md:text-left lg:mt-3">
          Compartilhar
        </h3>

        <div className="flex flex-col items-center self-center md:items-start md:self-start">
          <div className="flex flex-row gap-4">
            {socialNetwork.map((socialNetworks) => (
              <div
                key={socialNetworks.name}
                className="flex cursor-pointer flex-col items-center"
              >
                <div className="flex size-12 items-center justify-center rounded-full border bg-gray-300 text-primary">
                  {socialNetworks.icon}
                </div>
                <span className="mt-2 font-lato-bold text-xs text-darkGray">
                  {socialNetworks.name}
                </span>
              </div>
            ))}
          </div>
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
                isFirst={index === 0}
                isLast={index === array.length - 1}
                id={terms.id}
                name={terms.term}
                isActive={selectedTerm === terms.term}
                onClick={(value) => {
                  setSelectedTerm(value.toString());
                }}
              />
            ))}
          </div>

          <div className="flex w-3/4 flex-col">
            {filteredTerm && (
              <div className="size-[90%] justify-start text-left font-lato-regular text-2xl">
                <h1 className="mb-7 text-4xl text-primary">
                  {filteredTerm.term}
                </h1>
                {filteredTerm.definition.split("\n").map((line) => (
                  <p className="my-6">{line}</p>
                ))}
              </div>
            )}

            <div className="mt-32">
              <h3 className="mb-4 text-center text-xl text-primary md:text-left lg:mt-3">
                Compartilhar
              </h3>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex flex-row gap-4">
                  {socialNetwork.map((socialNetworks) => (
                    <div
                      key={socialNetworks.name}
                      className="flex cursor-pointer flex-col items-center"
                    >
                      <div className="flex size-12 items-center justify-center rounded-full border bg-gray-300 text-primary">
                        {socialNetworks.icon}
                      </div>
                      <span className="mt-2 font-lato-bold text-xs text-darkGray">
                        {socialNetworks.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
