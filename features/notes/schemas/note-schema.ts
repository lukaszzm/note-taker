import { z } from "zod";

export const noteSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  label: z.enum(["work", "personal", "university", "other"], {
    required_error: "Label is required",
  }),
  content: z
    .string()
    .min(1, "Content is required")
    .max(5000, "Content must be less than 5000 characters"),
});

export type NotePayload = z.infer<typeof noteSchema>;
