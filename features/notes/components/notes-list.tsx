"use client";

import { NoNotes } from "@/features/notes/components/no-notes";
import { NoteListItem } from "@/features/notes/components/note-list-item";
import { NotesListLoading } from "@/features/notes/components/notes-list-loading";
import { useNotes } from "@/features/notes/hooks/use-notes";
import { useFilters } from "@/features/search/hooks/useFilters";
import { matchLabel } from "@/features/search/utils/match-label";
import { matchSearchTerm } from "@/features/search/utils/match-search-term";

interface Props {
  notesApiUrl: string;
  noteByIdApiUrl: string;
  notePdfApiUrl: string;
}

export function NotesList({
  notesApiUrl,
  noteByIdApiUrl,
  notePdfApiUrl,
}: Props) {
  const { data: notes, isPending, error } = useNotes(notesApiUrl);
  const { deferredSearchTerm, label } = useFilters();

  if (isPending) {
    return <NotesListLoading />;
  }

  if (error) {
    return <div>Error loading notes: {error.message}</div>;
  }

  if (notes.length === 0) {
    return <NoNotes />;
  }

  const filteredNotes = notes.filter((note) => {
    return matchLabel(note, label) && matchSearchTerm(note, deferredSearchTerm);
  });

  return (
    <ul className="space-y-4">
      {filteredNotes.map((note) => (
        <NoteListItem
          key={note.id}
          note={note}
          noteByIdApiUrl={noteByIdApiUrl}
          notePdfApiUrl={notePdfApiUrl}
        />
      ))}
    </ul>
  );
}
