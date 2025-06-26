import { createContext, useContext, useMemo, useState, ReactNode } from "react";

interface LocationContextProps {
  state: string | null;
  setState: (state: string) => void;
}

const LocationContext = createContext<LocationContextProps | undefined>(
  undefined,
);

interface LocationProviderProps {
  children: ReactNode;
}

export function LocationProvider({
  children,
}: LocationProviderProps): JSX.Element {
  const [state, setState] = useState<string | null>(null);

  const value = useMemo(() => ({ state, setState }), [state]);

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext(): LocationContextProps {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error(
      "useLocationContext must be used within a LocationProvider",
    );
  }

  return context;
}
