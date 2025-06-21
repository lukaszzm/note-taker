import { HelperText } from "@/features/auth/components/helper-text";
import { SignUpForm } from "@/features/auth/components/sign-up-form";

export const metadata = {
  title: "Sign Up - Notomatic",
};

export default function SignUp() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Create an Account</h1>
        <p className="text-muted-foreground">
          Join Notomatic to start managing your notes and tasks efficiently.
        </p>
      </div>
      <div className="space-y-4">
        <SignUpForm />
        <HelperText variant="sign-up" />
      </div>
    </>
  );
}
