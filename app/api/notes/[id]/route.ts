import { note } from "@/db/schema";
import { auth } from "@/features/auth/lib/auth";
import { db } from "@/features/shared/lib/db";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: noteId } = await params;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  await db
    .delete(note)
    .where(and(eq(note.id, noteId), eq(note.userId, session.user.id)));

  return new Response(JSON.stringify("Removed"), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
