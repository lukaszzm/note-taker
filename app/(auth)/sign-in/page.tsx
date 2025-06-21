import { SignInForm } from "@/features/auth/components/sign-in-form";
import { HelperText } from "@/features/auth/components/helper-text";
import { TestAccount } from "@/features/auth/components/test-account";

export const metadata = {
  title: "Sign In - Notomatic",
};

export default function SignIn() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Sign in</h1>
        <p className="text-muted-foreground">
          Welcome back! Please sign in to continue using Notomatic.
        </p>
      </div>
      <div className="space-y-4">
        <TestAccount />
        <SignInForm />
        <HelperText variant="sign-in" />
      </div>
    </>
  );
}
