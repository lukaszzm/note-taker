"use client";

import { NoNotes } from "@/features/notes/components/no-notes";
import { NoteListItem } from "@/features/notes/components/note-list-item";
import { NotePreview } from "@/features/notes/components/note-preview";
import { NotesListLoading } from "@/features/notes/components/notes-list-loading";
import { useNotes } from "@/features/notes/hooks/use-notes";

export function NotesList() {
  const { data: notes, isPending, error } = useNotes();

  if (isPending) {
    return <NotesListLoading />;
  }

  if (error) {
    return <div>Error loading notes: {error.message}</div>;
  }

  if (notes.length === 0) {
    return <NoNotes />;
  }

  return (
    <ul className="space-y-4">
      {notes.map((note) => (
        <NoteListItem key={note.id} note={note} />
      ))}
    </ul>
  );
}
