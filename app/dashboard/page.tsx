import { NotesList } from "@/features/notes/components/notes-list";
import { getProxyUrl } from "@/features/shared/lib/proxy";

export default function DashboardPage() {
  const notesApiUrl = getProxyUrl("/api/notes");
  const noteByIdApi = getProxyUrl("/api/notes/:noteId");
  const notePdfApi = getProxyUrl("/api/notes/:noteId/pdf");

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Your Notes</h1>
      <NotesList
        notesApiUrl={notesApiUrl}
        noteByIdApiUrl={noteByIdApi}
        notePdfApiUrl={notePdfApi}
      />
    </div>
  );
}
