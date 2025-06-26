import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MicIcon, SearchIcon } from "@/components/Icons";
import apiClient from "@/services/apiClient";
import { Spinner } from "@/components/Spinner";
import {
  SpeechRecognitionErrorEvent,
  SpeechRecognitionResultEvent,
} from "./types";

interface SearchResult {
  path: string;
  title: string;
  description: string;
}

const SearchInputMobile = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    const fetchResults = async (): Promise<void> => {
      if (!debouncedTerm) {
        setResults([]);

        setHasSearched(false);

        return;
      }

      setIsLoading(true);

      setHasSearched(false);

      try {
        const response = await apiClient.post("/api/pages/search", {
          query: debouncedTerm,
          language: "pt",
        });

        setResults(response.data || []);

        setHasSearched(true);
      } catch (error) {
        error;
        setResults([]);
        setHasSearched(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [debouncedTerm]);

  const handleVoiceSearch = (): void => {
    if (!("webkitSpeechRecognition" in window)) return;

    const SpeechRecognitionConstructor = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognitionConstructor();

    recognition.lang = "pt-BR";

    recognition.onstart = () => setIsRecording(true);

    recognition.onresult = (event: SpeechRecognitionResultEvent) => {
      const { transcript } = event.results[0][0];

      setSearchTerm(transcript);

      setDebouncedTerm(transcript);

      setIsRecording(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      event.error;
      setIsRecording(false);
    };

    recognition.onend = () => setIsRecording(false);

    recognition.start();
  };

  const handleClick = (): void => {
    setSearchTerm("");

    setDebouncedTerm("");

    setResults([]);

    setHasSearched(false);
  };

  return (
    <div className="relative w-full">
      <div
        className={`mt-2 flex h-14 w-full items-center justify-between rounded-full border border-solid md:hidden ${
          isRecording ? "border-red-500" : "border-primary"
        } bg-white px-6 font-semibold opacity-85`}
      >
        <div className="flex w-full flex-col">
          <input
            type="text"
            aria-label="Search input"
            className="w-full border-none bg-transparent text-base font-bold outline-none placeholder:text-primary"
            placeholder="Como podemos te ajudar?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <SearchIcon className="mr-2 text-primary" />

        <MicIcon
          className={`cursor-pointer text-primary ${
            isRecording ? "animate-pulse" : ""
          }`}
          onClick={handleVoiceSearch}
        />
      </div>

      {debouncedTerm && (
        <div className="bg-white px-6 font-semibold md:hidden">
          <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-lg bg-white p-4 shadow-lg">
            {isLoading && (
              <div className="flex items-center justify-center py-4 text-primary">
                <Spinner />
              </div>
            )}

            {!isLoading &&
              results.length > 0 &&
              results.map((page) => (
                <Link
                  key={page.path}
                  href={page.path.startsWith("/") ? page.path : `/${page.path}`}
                  className="block rounded-lg p-4 transition duration-300 hover:bg-gray-100 hover:text-primary"
                  onClick={handleClick}
                >
                  <div className="text-lg font-bold text-primary">
                    {page.title || "Página Sem Título"}
                  </div>

                  <div className="text-sm text-gray-600">
                    {page.description || "Sem descrição"}
                  </div>
                </Link>
              ))}

            {!isLoading && results.length === 0 && hasSearched && (
              <div className="py-2 text-base text-gray-500">
                Nenhum resultado encontrado.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInputMobile;
