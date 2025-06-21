"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { signOut } from "@/features/auth/actions/sign-out-action";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface SignOutProps extends ButtonProps {
  homeHref: string;
}

export function SignOut({ homeHref, ...props }: SignOutProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      const result = await signOut();
      if (result.success) {
        router.push(homeHref);
      }
    });
  };

  return (
    <Button onClick={handleSignOut} disabled={isPending} {...props}>
      Sign Out
    </Button>
  );
}
