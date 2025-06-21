import { getNotes } from "@/features/notes/data/get-notes";
import { useQuery } from "@tanstack/react-query";

export function useNotes() {
  return useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });
}
