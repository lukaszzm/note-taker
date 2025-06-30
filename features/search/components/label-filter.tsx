"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilters } from "@/features/search/hooks/useFilters";

export function LabelFilter() {
  const { label, updateLabel } = useFilters();

  return (
    <Select value={label} onValueChange={updateLabel}>
      <SelectTrigger className="w-40 bg-card">
        <SelectValue placeholder="All labels" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter by label</SelectLabel>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="university">University</SelectItem>
          <SelectItem value="other">Other</SelectItem>
          <SelectItem value="all">All</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
