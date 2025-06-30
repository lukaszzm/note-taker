"use client";

import { createContext, useDeferredValue, useState } from "react";

type FiltersContextType = {
  label: string;
  updateLabel: (label: string) => void;
  searchTerm: string;
  deferredSearchTerm: string;
  updateSearchTerm: (term: string) => void;
};

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

export function FiltersProvider({ children }: React.PropsWithChildren) {
  const [label, setLabel] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const value = {
    label,
    updateLabel: setLabel,
    searchTerm,
    deferredSearchTerm,
    updateSearchTerm: setSearchTerm,
  } satisfies FiltersContextType;

  return <FiltersContext value={value}>{children}</FiltersContext>;
}
