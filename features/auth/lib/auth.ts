import { db } from "@/features/shared/lib/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

import * as schema from "@/db/schema";
import { getProxyUrl } from "@/features/shared/lib/proxy";

export const auth = betterAuth({
  baseURL: getProxyUrl(null),
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [nextCookies()],
});
