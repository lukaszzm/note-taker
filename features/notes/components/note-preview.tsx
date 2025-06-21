import { Note } from "@/app/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";

interface NotePreviewProps {
  note: Note;
  open: boolean;
  toggleOpen: (open: boolean) => void;
}

export function NotePreview({ note, open, toggleOpen }: NotePreviewProps) {
  const createdAt = note.createdAt
    ? new Date(note.createdAt).toLocaleDateString()
    : null;

  const updatedAt = note.updatedAt
    ? new Date(note.updatedAt).toLocaleDateString()
    : null;

  const lastModified = updatedAt || createdAt || "Unknown";

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{note.title}</DialogTitle>
          <DialogDescription>Last modified: {lastModified}</DialogDescription>
        </DialogHeader>
        <div className="space-y-1">
          <Label className="my-0 text-sm">Content:</Label>
          <p className="mt-2 mb-4 text-sm text-muted-foreground">
            {note.content}
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
