import { Note } from "@/types";
import { NoteActionsMenu } from "@/features/notes/components/note-actions-menu";
import { NoteBadge } from "@/features/notes/components/note-badge";

interface NoteListItemProps {
  note: Note;
  noteByIdApiUrl: string;
  notePdfApiUrl: string;
}

export function NoteListItem({
  note,
  noteByIdApiUrl,
  notePdfApiUrl,
}: NoteListItemProps) {
  return (
    <li className=" flex gap-4 justify-between items-center bg-white rounded-md border border-border px-4 py-2">
      <div className="space-y-1 flex-1 overflow-x-hidden">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-medium">{note.title}</h2>
          <NoteBadge label={note.label} />
        </div>

        <p className="text-muted-foreground text-sm truncate">{note.content}</p>
      </div>
      <NoteActionsMenu
        note={note}
        noteByIdApiUrl={noteByIdApiUrl}
        notePdfApiUrl={notePdfApiUrl}
      />
    </li>
  );
}
