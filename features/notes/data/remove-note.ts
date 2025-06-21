export async function removeNote({
  noteId,
  noteUrl,
}: {
  noteId: string;
  noteUrl: string;
}): Promise<void> {
  const urlWithNoteId = noteUrl.replace(":noteId", noteId);
  const response = await fetch(urlWithNoteId, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to remove note");
  }

  return response.json();
}
