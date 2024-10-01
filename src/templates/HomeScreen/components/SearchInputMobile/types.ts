export interface SpeechRecognitionResultEvent extends Event {
  results: {
    transcript: string;
  }[][];
}

export interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}
