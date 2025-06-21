import { Note } from "@/types";
import { NotePayload } from "@/features/notes/schemas/note-schema";

export async function createNote({
  payload,
  url,
}: {
  payload: NotePayload;
  url: string;
}): Promise<Note> {
  const response = await fetch(url, {
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
