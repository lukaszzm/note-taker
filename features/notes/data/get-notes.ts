import { Note } from "@/types";

export async function getNotes(url: string): Promise<Note[]> {
  const response = await fetch(url, {
    method: "GET",
  });

  return response.json();
}
