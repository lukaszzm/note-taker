import { Note } from "@/types";

export function matchSearchTerm(note: Note, searchTerm: string): boolean {
  const trimmedSearchTerm = searchTerm.trim().toLowerCase();

  if (!trimmedSearchTerm) {
    return true;
  }

  const noteTitle = note.title.toLowerCase();
  const noteContent = note.content.toLowerCase();

  return (
    noteTitle.includes(trimmedSearchTerm) ||
    noteContent.includes(trimmedSearchTerm)
  );
}
