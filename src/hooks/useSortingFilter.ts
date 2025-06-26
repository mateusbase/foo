import { SortingFilterReturn } from "@/utils/sortingOptions";
import { useState } from "react";

export const useSortingFilter = (
  defaultKey: string | number,
): SortingFilterReturn => {
  const [selectedKey, setSelectedKey] = useState<string | number>(defaultKey);

  const handleChange = (key: string | number): void => {
    if (key !== selectedKey) {
      setSelectedKey(key);
    }
  };

  return {
    selectedKey,
    handleChange,
  };
};
