import { useEffect, useMemo, useRef, useState } from "react";
import PageLayout from "@/components/PageLayout";
import AlphabetSelector from "@/components/AlphabetSelector";
import { RichText } from "@/components/Blocks/RichText";
import ShareOptions from "@/components/ShareOptions";
import socialNetwork from "@/components/ShareOptions/socialNetwork";
import { SearchIcon } from "@/components/Icons";
import BaseInput from "@/components/Input";
import BaseSelect from "@/components/Select";
import { RxHamburgerMenu } from "react-icons/rx";
import apiClient from "@/services/apiClient";
import { LoaderCircle } from "lucide-react";
import axios from "axios";
import { GlossaryRootProps } from "./types";
import MenuItemGlossary from "./components/MenuItem";

export type GlossaryTerm = {
  name: string;
  content: string;
};

export function GlossaryRoot({
  data,
  breadcrumbs,
}: GlossaryRootProps): JSX.Element {
  const [selectedLetter, setSelectedLetter] = useState<string>("A");

  const [selectedTerm, setSelectedTerm] = useState<string>("");

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [remoteTerms, setRemoteTerms] = useState<GlossaryTerm[]>([]);

  const [loading, setLoading] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const currentSearchTerm = useRef("");

  const glossaryData = useMemo(
    () =>
      Array.from(new Set(data.words.map((word) => word.name[0].toUpperCase())))
        .sort()
        .map((letter) => ({ letter })),
    [data.words],
  );

  useEffect(() => {
    const fetchTermsByLetter = async (): Promise<void> => {
      if (!selectedLetter) return;

      setLoading(true);

      try {
        const response = await apiClient.post("/api/pages/kind-search", {
          kind: "GLOSSARY_WORD",
          query: "STARTING_LETTER",
          payload: { letter: selectedLetter.toLowerCase() },
          language: "pt",
        });

        const terms = response.data || [];

        const sortedTerms = [...terms].sort((a, b) =>
          a.name.localeCompare(b.name, "pt", { sensitivity: "base" }),
        );

        setRemoteTerms(sortedTerms);

        const currentTermStillValid = sortedTerms.some(
          (t: { name: string }) => t.name === selectedTerm,
        );

        if (!currentTermStillValid) {
          setSelectedTerm(sortedTerms[0]?.name || "");
        }
      } catch (err) {
        setRemoteTerms([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTermsByLetter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLetter]);

  const handleSearch = async (query: string): Promise<void> => {
    const controller = new AbortController();
    abortControllerRef.current?.abort();
    abortControllerRef.current = controller;

    try {
      const searchResponse = await apiClient.post(
        "/api/pages/kind-search",
        {
          kind: "GLOSSARY_WORD",
          query: "SEARCH_ALL",
          payload: { query: query.trim() },
          language: "pt",
        },
        { signal: controller.signal },
      );

      const terms = searchResponse.data || [];

      if (terms.length === 0) {
        setRemoteTerms([]);
        setSelectedTerm("");
        setSelectedLetter("");
        return;
      }

      const exactMatch =
        terms.find(
          (t: { name: string }) =>
            t.name.toLowerCase() === query.trim().toLowerCase(),
        ) || terms[0];

      const letterResponse = await apiClient.post(
        "/api/pages/kind-search",
        {
          kind: "GLOSSARY_WORD",
          query: "STARTING_LETTER",
          payload: { letter: exactMatch.name[0].toLowerCase() },
          language: "pt",
        },
        { signal: controller.signal },
      );

      const letterTerms = letterResponse.data || [];

      const finalTerm =
        letterTerms.find((t: { name: string }) => t.name === exactMatch.name) ||
        letterTerms[0];

      setRemoteTerms(letterTerms);

      setSelectedLetter(exactMatch.name[0].toUpperCase());

      setSelectedTerm(finalTerm?.name || "");
    } catch (err) {
      const error = err as Error;
      if (
        error instanceof axios.Cancel ||
        error.name === "CanceledError" ||
        error.cause === "ERR_CANCELED"
      ) {
        return;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    currentSearchTerm.current = searchTerm;

    if (!searchTerm.trim()) {
      setRemoteTerms(data.words);
      setSelectedLetter("A");
      setSelectedTerm("");
      return () => {};
    }

    const debounceTimer = setTimeout(() => {
      setLoading(true);
      handleSearch(searchTerm);
    }, 400);

    return () => {
      clearTimeout(debounceTimer);
      abortControllerRef.current?.abort();
    };
  }, [searchTerm, data.words]);

  let filteredTerms: GlossaryTerm[];

  if (searchTerm.trim()) {
    filteredTerms = remoteTerms;
  } else if (selectedLetter) {
    filteredTerms = remoteTerms;
  } else {
    filteredTerms = data.words;
  }
  filteredTerms = filteredTerms.sort((a, b) =>
    a.name.localeCompare(b.name, "pt", { sensitivity: "base" }),
  );

  const activeTerm = remoteTerms.find((term) => term.name === selectedTerm);

  return (
    <main>
      <PageLayout
        title={data.header?.title}
        subtitle={data.header?.description}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-col items-center lg:hidden">
          <div className="my-11 flex w-full flex-col items-center gap-4 self-center md:my-5 md:flex-row md:gap-6 md:align-middle">
            <BaseInput
              placeholder="Busque pelo termo"
              size="lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              endContent={
                loading ? (
                  <LoaderCircle className="size-5 animate-spin text-primary" />
                ) : (
                  <SearchIcon className="text-2xl text-primary" />
                )
              }
              className="h-[54px] w-full text-primary placeholder:text-primary"
            />

            <BaseSelect
              size="lg"
              className="h-[54px] w-full border-primary text-primary md:w-[330px]"
              options={glossaryData.map((glossary) => ({
                value: glossary.letter,
                label: glossary.letter,
              }))}
              startContent={
                <RxHamburgerMenu size={20} className="text-primary" />
              }
              value={selectedLetter || glossaryData[0].letter}
              onChange={setSelectedLetter}
            />

            <BaseSelect
              size="lg"
              className="h-[54px] w-full border-primary text-primary md:w-[330px]"
              options={remoteTerms.map((term) => ({
                value: term.name,
                label: term.name,
              }))}
              startContent={
                <RxHamburgerMenu size={20} className="text-primary" />
              }
              onChange={(selectedValue: string | number) => {
                setSelectedTerm(selectedValue.toString());
              }}
            />
          </div>

          <div className="flex flex-col">
            {activeTerm && (
              <div>
                <h2 className="mb-8 text-4xl font-bold text-primary">
                  {activeTerm.name}
                </h2>

                <RichText content={activeTerm.content} />

                <div className="my-20">
                  <ShareOptions options={socialNetwork} />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden flex-col lg:flex">
          <AlphabetSelector
            onLetterSelect={(letter: string) => {
              setSelectedLetter(letter);
            }}
            selectedLetter={selectedLetter ?? ""}
            searchPlaceholder="Busque pelo termo"
            handleSearchChange={(e) => setSearchTerm(e.target.value)}
            valueSearch={searchTerm}
            loading={loading}
          />

          {!activeTerm ? (
            <p className="mt-5 text-left text-2xl text-lightGray">
              Nenhum termo encontrado.
            </p>
          ) : (
            <div className="mb-20 mt-8 flex flex-row gap-16">
              <div className="w-1/4 rounded-3xl text-xl text-white">
                {filteredTerms.map((term, index, array) => (
                  <MenuItemGlossary
                    key={term.name}
                    id={term.name}
                    targetId=""
                    name={term.name}
                    isActive={selectedTerm === term.name}
                    isFirst={index === 0}
                    isLast={index === array.length - 1}
                    onClick={(value) => {
                      setSelectedTerm(value.toString());
                    }}
                  />
                ))}
              </div>

              <div className="flex w-3/4 flex-col">
                {activeTerm && (
                  <div>
                    <h2 className="mb-8 text-4xl font-bold text-primary">
                      {activeTerm.name}
                    </h2>

                    <RichText content={activeTerm.content} />

                    <div className="mt-20">
                      <ShareOptions options={socialNetwork} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </PageLayout>
    </main>
  );
}
