import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ListMinus } from "lucide-react";

interface NotePreviewTriggerProps {
  onClick: () => void;
}

export function NotePreviewTrigger({ onClick }: NotePreviewTriggerProps) {
  return (
    <DropdownMenuItem onSelect={onClick}>
      <ListMinus />
      Details
    </DropdownMenuItem>
  );
}
