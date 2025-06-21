import { Note } from "@/app/types";
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

interface NoteActionsMenuProps {
  note: Note;
}

export function NoteActionsMenu({ note }: NoteActionsMenuProps) {
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
          <ExportPDFNote noteId={note.id} noteTitle={note.title} />
          <RemoveNote noteId={note.id} />
        </DropdownMenuContent>
      </DropdownMenu>
      <NotePreview
        note={note}
        open={isPreviewOpen}
        toggleOpen={setIsPreviewOpen}
      />
    </>
  );
}
