import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Trash } from "lucide-react";

interface RemoveNoteProps {
  onClick: () => void;
}

export function RemoveNote({ onClick }: RemoveNoteProps) {
  return (
    <DropdownMenuItem variant="destructive" onClick={onClick}>
      <Trash />
      Delete
    </DropdownMenuItem>
  );
}
