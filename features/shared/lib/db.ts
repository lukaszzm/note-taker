import "dotenv/config";

import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({ url: process.env.DB_FILE_NAME! });
const db = drizzle({ client, schema });

export { db };
