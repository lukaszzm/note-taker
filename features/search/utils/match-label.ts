import { Note } from "@/types";

export function matchLabel(note: Note, label: string): boolean {
  if (label === "all") {
    return true;
  }

  const fixedNoteLabel = note.label ?? "other";
  return fixedNoteLabel.toLowerCase() === label.toLowerCase();
}
