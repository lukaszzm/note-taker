"use server";

import { auth } from "@/features/auth/lib/auth";
import { Credentials } from "@/features/auth/schemas/credentials-schema";
import { redirect } from "next/navigation";

export async function signUp(credentials: Credentials) {
  try {
    await auth.api.signUpEmail({
      body: {
        email: credentials.email,
        name: credentials.email,
        password: credentials.password,
      },
    });

    return { success: true } as const;
  } catch (err) {
    console.error("Sign up failed:", err);
    return {
      success: false,
      error: "Sign up failed. Please check your credentials and try again.",
    } as const;
  }
}
