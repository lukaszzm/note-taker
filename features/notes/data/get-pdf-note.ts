export async function getPDFNote(noteId: string): Promise<Blob> {
  const response = await fetch(`/api/notes/${noteId}/pdf`, {
    method: "GET",
    headers: {
      "Content-Type": "application/pdf",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch PDF for note ${noteId}`);
  }

  const buffer = await response.arrayBuffer();
  const blob = new Blob([buffer], { type: "application/pdf" });

  return blob;
}
