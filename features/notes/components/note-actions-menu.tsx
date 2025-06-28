import { Note } from "@/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExportPDFNote } from "@/features/notes/components/export-note-pdf";
import { NotePreview } from "@/features/notes/components/note-preview";
import { NotePreviewTrigger } from "@/features/notes/components/note-preview-trigger";
import { RemoveNote } from "@/features/notes/components/remove-note";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { RemoveConfirm } from "@/features/notes/components/remove-confirm";

interface NoteActionsMenuProps {
  note: Note;
  noteByIdApiUrl: string;
  notePdfApiUrl: string;
}

export function NoteActionsMenu({
  note,
  noteByIdApiUrl,
  notePdfApiUrl,
}: NoteActionsMenuProps) {
  const [isRemoveConfirmOpen, setIsRemoveConfirmOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <EllipsisVertical />
            <span className="sr-only">Open Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <NotePreviewTrigger onClick={() => setIsPreviewOpen(true)} />
          <ExportPDFNote
            noteId={note.id}
            noteTitle={note.title}
            notePdfApiUrl={notePdfApiUrl}
          />
          <RemoveNote onClick={() => setIsRemoveConfirmOpen(true)} />
        </DropdownMenuContent>
      </DropdownMenu>
      <NotePreview
        note={note}
        open={isPreviewOpen}
        toggleOpen={setIsPreviewOpen}
      />
      <RemoveConfirm
        noteId={note.id}
        noteByIdApiUrl={noteByIdApiUrl}
        open={isRemoveConfirmOpen}
        toggleOpen={setIsRemoveConfirmOpen}
      />
    </>
  );
}
