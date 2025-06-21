import { auth } from "@/features/auth/lib/auth";
import { db } from "@/features/shared/lib/db";
import { headers } from "next/headers";
import PDFDocument from "pdfkit";

function generatePDF(title: string, content: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    });

    const buffers: Uint8Array[] = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });
    doc.on("error", reject);

    doc.fontSize(24).fillColor("#333333").text(title, {
      align: "center",
    });

    doc.moveDown(2);

    doc
      .strokeColor("#cccccc")
      .lineWidth(1)
      .moveTo(50, doc.y)
      .lineTo(550, doc.y)
      .stroke();

    doc.moveDown(1);

    doc.fontSize(12).fillColor("#000000").text(content, {
      align: "left",
      lineGap: 5,
    });

    const footerY = doc.page.height - 100;
    doc
      .fontSize(8)
      .fillColor("#999999")
      .text("Created with Notomatic", 50, footerY, {
        align: "center",
      });

    doc.end();
  });
}

export async function GET(
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

  const note = await db.query.note.findFirst({
    where: (note, { eq }) => eq(note.id, noteId),
  });

  if (!note) {
    return new Response("Note not found", { status: 404 });
  }

  const isUserNote = note.userId === session.user.id;

  if (!isUserNote) {
    return new Response("Forbidden", { status: 403 });
  }

  try {
    const pdfBuffer = await generatePDF(note.title, note.content);
    const pdfFileName = `${note.title}-notomatic.pdf`;

    return new Response(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${pdfFileName}"`,
        "Content-Length": pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
