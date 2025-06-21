import { NotesList } from "@/features/notes/components/notes-list";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold">Your Notes</h1>
      <NotesList />
    </div>
  );
}
