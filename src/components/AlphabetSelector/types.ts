export interface AlphabetSelectorProps {
  selectedLetter: string;
  onLetterSelect: (letter: string) => void;
  searchPlaceholder?: string;
  handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valueSearch?: string;
}
