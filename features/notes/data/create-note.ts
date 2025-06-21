import { Note } from "@/app/types";
import { NotePayload } from "@/features/notes/schemas/note-schema";

export async function createNote(payload: NotePayload): Promise<Note> {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to create note");
  }

  return response.json();
}
