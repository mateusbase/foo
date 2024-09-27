/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search, Mic } from "lucide-react";
import React, { useState } from "react";

interface SpeechRecognitionResultEvent extends Event {
  results: {
    transcript: string;
  }[][];
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

const SearchInput = (): JSX.Element => {
  const [searchText, setSearchText] = useState("");

  const handleVoiceSearch = (): void => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Desculpe, seu navegador não suporta reconhecimento de voz.");
      return;
    }

    // eslint-disable-next-line new-cap
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "pt-BR";

    recognition.onstart = () => {
      console.log("Reconhecimento de voz iniciado...");
    };

    recognition.onresult = (event: SpeechRecognitionResultEvent) => {
      const { transcript } = event.results[0][0];
      setSearchText(transcript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Erro no reconhecimento de voz:", event.error);
    };

    recognition.start();
  };

  return (
    <div className="mt-2 flex h-14 w-full items-center justify-between rounded-full border border-solid border-primary bg-white px-10 font-semibold opacity-85 md:hidden">
      <div className="flex w-full flex-col">
        <input
          type="text"
          aria-label="Search input"
          className="h-full w-full border-none bg-transparent text-base font-bold placeholder-primary outline-none"
          placeholder="Como podemos te ajudar?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <Search className="mr-2 text-primary" size={28} />

      <Mic
        className="cursor-pointer text-primary"
        size={28}
        onClick={handleVoiceSearch}
      />
    </div>
  );
};

export default SearchInput;
