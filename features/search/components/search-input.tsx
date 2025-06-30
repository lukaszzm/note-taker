"use client";

import { Input } from "@/components/ui/input";
import { useFilters } from "@/features/search/hooks/useFilters";
import { SearchIcon } from "lucide-react";

export function SearchInput() {
  const { searchTerm, updateSearchTerm } = useFilters();

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search notes..."
        className="w-full bg-card max-w-64"
        value={searchTerm}
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
      <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
    </div>
  );
}
