import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { removeNote } from "@/features/notes/data/remove-note";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import { toast } from "sonner";

interface RemoveNoteProps {
  noteId: string;
  noteByIdApiUrl: string;
}

export function RemoveNote({ noteId, noteByIdApiUrl }: RemoveNoteProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: removeNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast.success("Note removed successfully!");
    },
    onError: () => {
      toast.error("Failed to remove note. Please try again.");
    },
  });

  const onRemove = () => mutate({ noteId, noteUrl: noteByIdApiUrl });

  return (
    <DropdownMenuItem variant="destructive" onClick={onRemove}>
      <Trash />
      Delete
    </DropdownMenuItem>
  );
}
