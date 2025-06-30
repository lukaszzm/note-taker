import { FiltersContext } from "@/features/search/components/filters-provider";
import { useContext } from "react";

export function useFilters() {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return context;
}
