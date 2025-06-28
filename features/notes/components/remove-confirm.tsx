import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeNote } from "@/features/notes/data/remove-note";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface RemoveConfirmProps {
  noteId: string;
  noteByIdApiUrl: string;
  open: boolean;
  toggleOpen: (open: boolean) => void;
}

export function RemoveConfirm({
  noteId,
  noteByIdApiUrl,
  open,
  toggleOpen,
}: RemoveConfirmProps) {
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
    <AlertDialog open={open} onOpenChange={toggleOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove Note</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to remove this note? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onRemove} asChild>
            <Button variant="destructive">Remove</Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
