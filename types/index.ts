import { note, user } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type User = InferSelectModel<typeof user>;
export type Note = InferSelectModel<typeof note>;
export type Label = "work" | "personal" | "university" | "other";
