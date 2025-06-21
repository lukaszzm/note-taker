"use server";

import { auth } from "@/features/auth/lib/auth";
import { Credentials } from "@/features/auth/schemas/credentials-schema";
import { getProxyUrl } from "@/features/shared/lib/proxy";

export async function signUp(credentials: Credentials) {
  try {
    await auth.api.signUpEmail({
      body: {
        email: credentials.email,
        name: credentials.email,
        password: credentials.password,
      },
    });

    return { success: true, url: getProxyUrl("/dashboard") } as const;
  } catch (err) {
    console.error("Sign up failed:", err);
    return {
      success: false,
      error: "Sign up failed. Please check your credentials and try again.",
    } as const;
  }
}
