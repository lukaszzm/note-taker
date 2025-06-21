import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { getPDFNote } from "@/features/notes/data/get-pdf-note";
import { downloadBlob } from "@/features/notes/utils/download-blob";
import { useMutation } from "@tanstack/react-query";
import { Download } from "lucide-react";
import { toast } from "sonner";

interface ExportPDFNoteProps {
  noteId: string;
  noteTitle: string;
  notePdfApiUrl: string;
}

export function ExportPDFNote({
  noteId,
  noteTitle,
  notePdfApiUrl,
}: ExportPDFNoteProps) {
  const { mutate } = useMutation({
    mutationFn: getPDFNote,
    onMutate: () => {
      toast.loading("Exporting note to PDF...", {
        id: "export-pdf-note",
      });
    },
    onSuccess: (data) => {
      const filename = `${noteTitle}-notomatic.pdf`;
      downloadBlob(data, filename);
      toast.dismiss("export-pdf-note");
      toast.success("Note exported successfully!");
    },
    onError: () => {
      toast.dismiss("export-pdf-note");
      toast.error("Failed to export note. Please try again.");
    },
  });

  return (
    <DropdownMenuItem onClick={() => mutate({ noteId, url: notePdfApiUrl })}>
      <Download />
      Export
    </DropdownMenuItem>
  );
}
