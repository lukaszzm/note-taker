import { Note } from "@/app/types";

export async function getNotes(): Promise<Note[]> {
  const response = await fetch("/api/notes", {
    method: "GET",
  });

  return response.json();
}
