interface WebkitSpeechRecognition extends EventTarget {
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

interface Window {
  webkitSpeechRecognition: {
    new (): WebkitSpeechRecognition;
  };

  kloe?: {
    open: () => void;
    close: () => void;
    show: () => void;
    hide: () => void;
    logout: () => void;
    updateContext: (context: Record<string, unknown>) => void;
    updateIdentityToken?: (token: string) => void;
  };
}

interface Window {
  webkitSpeechRecognition: {
    new (): WebkitSpeechRecognition;
  };
}
