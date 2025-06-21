import { note } from "@/db/schema";
import { auth } from "@/features/auth/lib/auth";
import { db } from "@/features/shared/lib/db";
import { headers } from "next/headers";

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const notes = await db.query.note.findMany({
    where: (note, { eq }) => eq(note.userId, session.user.id),
    orderBy: (note, { desc }) => desc(note.createdAt),
  });

  return new Response(JSON.stringify(notes), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await request.json();
  const { title, content } = body;

  if (!title || !content) {
    return new Response("Title and content are required", { status: 400 });
  }

  const newNote = await db
    .insert(note)
    .values({
      id: crypto.randomUUID(),
      title,
      content,
      userId: session.user.id,
    })
    .returning();

  return new Response(JSON.stringify(newNote), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
