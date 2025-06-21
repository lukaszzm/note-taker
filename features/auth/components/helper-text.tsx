import { getProxyUrl } from "@/features/shared/lib/proxy";
import Link from "next/link";

interface HelperTextProps {
  variant: "sign-in" | "sign-up";
}

export function HelperText({ variant }: HelperTextProps) {
  const signInHref = getProxyUrl("/sign-in");
  const signUpHref = getProxyUrl("/sign-up");

  const config =
    variant === "sign-in"
      ? {
          question: "Don't have an account?",
          trigger: "Sign up",
          href: signUpHref,
        }
      : {
          question: "Already have an account?",
          trigger: "Sign in",
          href: signInHref,
        };

  return (
    <p className="text-sm text-muted-foreground">
      {config.question}{" "}
      <Link href={config.href} className="text-primary hover:underline">
        {config.trigger}
      </Link>
    </p>
  );
}
