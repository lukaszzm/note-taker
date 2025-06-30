import { NotesList } from "@/features/notes/components/notes-list";
import { FiltersProvider } from "@/features/search/components/filters-provider";
import { LabelFilter } from "@/features/search/components/label-filter";
import { SearchInput } from "@/features/search/components/search-input";
import { getProxyUrl } from "@/features/shared/lib/proxy";

export default function DashboardPage() {
  const notesApiUrl = getProxyUrl("/api/notes");
  const noteByIdApi = getProxyUrl("/api/notes/:noteId");
  const notePdfApi = getProxyUrl("/api/notes/:noteId/pdf");

  return (
    <FiltersProvider>
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold">Your Notes</h1>
          <div className="flex items-center gap-2">
            <SearchInput />
            <LabelFilter />
          </div>
        </div>
        <NotesList
          notesApiUrl={notesApiUrl}
          noteByIdApiUrl={noteByIdApi}
          notePdfApiUrl={notePdfApi}
        />
      </div>
    </FiltersProvider>
  );
}
