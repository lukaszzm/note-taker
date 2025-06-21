export async function getPDFNote({
  noteId,
  url,
}: {
  noteId: string;
  url: string;
}): Promise<Blob> {
  const urlWithNoteId = url.replace(":noteId", noteId);

  const response = await fetch(urlWithNoteId, {
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
