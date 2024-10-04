import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  ReactElement,
  useEffect,
} from "react";

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({
  children,
}: LanguageProviderProps): ReactElement => {
  const [language, setLanguage] = useState<string>("pt_BR");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "pt_BR";
    setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = (): void => {
    const newLanguage = language === "en" ? "pt_BR" : "en";

    localStorage.setItem("language", newLanguage);

    setLanguage(newLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
