/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search, Mic } from "lucide-react";
import React, { useState } from "react";
import { useSearch } from "@/contexts/search.context";
import Link from "next/link";
import { SpeechRecognitionErrorEvent, SpeechRecognitionResultEvent } from "./types";

const SearchInput = (): JSX.Element => {
  const { searchTerm, setSearchTerm, results, setResults, pages } = useSearch();
  const [isRecording, setIsRecording] = useState(false);

  const handleSearch = (term: string): void => {
    setSearchTerm(term);

    if (term && pages.length > 0) {
      const filteredPages = pages.filter((page) => {
        const titleMatch = page.data?.title?.toLowerCase().includes(term.toLowerCase());
        const descriptionMatch = page.data?.description?.toLowerCase().includes(term.toLowerCase());
        return titleMatch || descriptionMatch;
      });
      setResults(filteredPages);
    } else {
      setResults([]);
    }
  };

  const handleVoiceSearch = (): void => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Desculpe, seu navegador não suporta reconhecimento de voz.");
      return;
    }

    // eslint-disable-next-line new-cap
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "pt-BR";

    recognition.onstart = () => {
      setIsRecording(true);
      console.log("Reconhecimento de voz iniciado...");
    };

    recognition.onresult = (event: SpeechRecognitionResultEvent) => {
      const { transcript } = event.results[0][0];
      setSearchTerm(transcript);
      handleSearch(transcript);
      setIsRecording(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setIsRecording(false);
      console.error("Erro no reconhecimento de voz:", event.error);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  return (
    <div className="relative w-full">
      <div className={`mt-2 flex h-14 w-full md:hidden items-center justify-between rounded-full border border-solid ${isRecording ? "border-red-500" : "border-primary"} bg-white px-10 font-semibold opacity-85`}>
        <div className="flex w-full flex-col">
          <input
            type="text"
            aria-label="Search input"
            className="h-full w-full border-none bg-transparent text-base font-bold placeholder-primary outline-none"
            placeholder="Como podemos te ajudar?"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <Search className="mr-2 text-primary" size={28} />

        <Mic
          className={`cursor-pointer text-primary ${isRecording ? "animate-pulse" : ""}`}
          size={28}
          onClick={handleVoiceSearch}
        />
      </div>

      {searchTerm && (
        <div className="bg-white md:hidden px-10 font-semibold opacity-85">
          <div className="absolute left-0 top-full mt-1 w-full rounded-lg bg-white p-4 shadow-lg">
            {results.length > 0 ? (
              results.map((page) => (
                <Link
                  key={page.id}
                  href={page.data?.url || "#"}
                  className="block py-4 text-blue-500"
                >
                  <div className="text-xl font-bold">
                    {page.data?.title || "Página Sem Título"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {page.data?.description || "Sem descrição"}
                  </div>
                </Link>
              ))
            ) : (
              <div className="py-2 text-lg text-gray-500">
                Nenhum resultado encontrado.
              </div>
            )}
          </div>
        </div>
      )}
    </div>

  );
};

export default SearchInput;
