export function NoNotes() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-1 py-12">
      <h2 className="text-2xl font-semibold">No Notes Found</h2>
      <p className="text-muted-foreground">
        Create your first note to get started.
      </p>
    </div>
  );
}
