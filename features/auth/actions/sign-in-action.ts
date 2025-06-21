"use server";

import { auth } from "@/features/auth/lib/auth";
import { Credentials } from "@/features/auth/schemas/credentials-schema";
import { redirect } from "next/navigation";

export async function signIn(credentials: Credentials) {
  try {
    await auth.api.signInEmail({
      body: {
        email: credentials.email,
        password: credentials.password,
      },
    });

    return { success: true } as const;
  } catch (err) {
    console.error("Sign in failed:", err);
    return {
      success: false,
      error: "Sign in failed. Please check your credentials and try again.",
    } as const;
  }
}
