"use server";

import { auth } from "@/features/auth/lib/auth";
import { Credentials } from "@/features/auth/schemas/credentials-schema";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { _success } from "zod/v4/core";

export async function signOut() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });

    return { success: true } as const;
  } catch (err) {
    console.error("Sign out failed:", err);
    return {
      success: false,
      error: "Sign out failed. Please try again.",
    } as const;
  }
}
