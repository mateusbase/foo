import { useRouter } from "next/router";
import AlphabetSelector from "@/components/AlphabetSelector";
import PageLayout from "@/components/PageLayout";
import { useEffect, useState } from "react";
import MenuItem from "@/components/MenuItem";
import BaseInput from "@/components/Input";
import { SearchIcon } from "lucide-react";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import { glossaryData } from "./glossaryMock";

export default function GlossaryScreen(): JSX.Element {
  const router = useRouter();
  const { query, isReady } = router;
  const [selectedLetter, setSelectedLetter] = useState(glossaryData[0].letter);
  const [selectedTermId, setSelectedTermId] = useState<string>(() => {
    if (isReady && query.slug) {
      const decodedTerm = decodeURIComponent(query.slug.toString());
      const matchingTerm = glossaryData
        .flatMap((glossary) => glossary.terms)
        .find((t) => t.term.toLowerCase().replace(/\s+/g, "-") === decodedTerm);

      return matchingTerm?.id || glossaryData[0].terms[0]?.id;
    }
    return glossaryData[0].terms[0]?.id;
  });

  useEffect(() => {
    if (!isReady || !query.slug) return;

    const decodedTerm = decodeURIComponent(query.slug as string);
    const matchingTerm = glossaryData
      .flatMap((glossary) => glossary.terms)
      .find((t) => t.term.toLowerCase().replace(/\s+/g, "-") === decodedTerm);

    if (matchingTerm) {
      const glossaryItem = glossaryData.find((g) =>
        g.terms.some((t) => t.id === matchingTerm.id),
      );

      if (glossaryItem) {
        setSelectedLetter(glossaryItem.letter);
        setSelectedTermId(matchingTerm.id.toString());
      }
    }
  }, [query.slug, isReady]);

  const filteredGlossary = glossaryData.find(
    (glossary) => glossary.letter === selectedLetter,
  );

  const filteredTerm = filteredGlossary?.terms.find(
    (term) => term.id === selectedTermId,
  );

  const handleLetterChange = (letter: string): void => {
    setSelectedLetter(letter);
    const newGlossary = glossaryData.find((g) => g.letter === letter);
    if (newGlossary?.terms.length) {
      setSelectedTermId(newGlossary.terms[0].id.toString());
      const termSlug = newGlossary.terms[0].term
        .toLowerCase()
        .replace(/\s+/g, "-");
      router.replace(`/glossario/${termSlug}`, undefined, { shallow: true });
    }
  };

  const handleTermChange = (termId: string): void => {
    setSelectedTermId(termId);
    const term = filteredGlossary?.terms.find(
      (newTerm) => newTerm.id === termId,
    );

    if (term) {
      const termSlug = term.term.toLowerCase().replace(/\s+/g, "-");
      router.replace(`/glossario/${termSlug}`, undefined, { shallow: true });
    }
  };

  return (
    <PageLayout
      title="Glossário"
      subtitle="Está com alguma dúvida sobre algum termo utilizado em oncologia? Encontre o significado de termos técnicos para o câncer digitando a palavra desejada ou verifique os termos existentes através de suas letras iniciais ou através dos links abaixo:"
    >
      {/* Telas pequenas e médias */}
      <div className="flex flex-col items-center lg:hidden">
        <div className="my-11 flex w-full flex-col items-center gap-4 self-center md:my-5 md:flex-row md:gap-6 md:align-middle">
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
            key={`letter-select-${selectedLetter}`}
            labelPlacement="outside"
            label=""
            labelColor="primary"
            radius="full"
            defaultSelectedKey={selectedLetter}
            size="lg"
            className="w-full text-primary md:w-[330px]"
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
              handleLetterChange(selectedValue.toString());
            }}
          />

          <BaseSelect
            color="primary"
            variant="bordered"
            key={`term-select-${selectedTermId}`}
            label=""
            labelPlacement="outside"
            labelColor="primary"
            radius="full"
            size="lg"
            className="w-full text-primary md:w-[330px]"
            borderStyle="border-primary"
            defaultSelectedKey={selectedTermId}
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
              handleTermChange(selectedValue.toString());
            }}
          />
        </div>

        {filteredTerm && (
          <div className="mb-9 mt-4 text-left font-lato-regular text-darkGray lg:w-[90%]">
            {filteredTerm.definition.split("\n").map((line) => (
              <p
                key={line}
                className={`${line.startsWith("•") ? "my-5 pl-4" : "my-3"}`}
              >
                {line}
              </p>
            ))}
          </div>
        )}
        <div className="mb-10">
          <ShareOptions options={socialNetwork} />
        </div>
      </div>

      {/* Telas grandes */}
      <div className="mb-10 hidden flex-col lg:flex">
        <AlphabetSelector
          onLetterSelect={handleLetterChange}
          selectedLetter={selectedLetter.toString()}
          searchPlaceholder="Busque pelo termo"
        />
        <div className="mt-8 flex flex-row gap-16">
          <div className="w-1/4 rounded-3xl text-xl text-white">
            {filteredGlossary?.terms.map((terms, index, array) => (
              <MenuItem
                key={terms.id}
                id={parseInt(terms.id.replace(/\D/g, ""), 10)}
                name={terms.term}
                isActive={selectedTermId === terms.id}
                isFirst={index === 0}
                isLast={index === array.length - 1}
                onClick={(value) => {
                  handleTermChange(`${selectedLetter.toUpperCase()}${value}`);
                }}
              />
            ))}
          </div>

          <div className="flex w-3/4 flex-col">
            {filteredTerm && (
              <div className="size-[90%] justify-start text-left font-lato-regular text-darkGray">
                <h1 className="mb-7 text-4xl text-primary">
                  {filteredTerm.term}
                </h1>
                {filteredTerm.definition.split("\n").map((line) => (
                  <p
                    key={line}
                    className={`${
                      line.startsWith("•")
                        ? "-my-2 pl-4 text-xl"
                        : "my-4 text-xl"
                    }`}
                  >
                    {line}
                  </p>
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
