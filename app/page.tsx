import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogsIcon } from "lucide-react";
import { getProxyUrl } from "@/features/shared/lib/proxy";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Notomatic",
  description: "A revolutionary note-taking app for everyone",
};

export default function Home() {
  const homeHref = getProxyUrl(null);
  const signInHref = getProxyUrl("/sign-in");
  const signUpHref = getProxyUrl("/sign-up");

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="flex items-center justify-between w-full px-6 py-4">
        <Link
          href={homeHref}
          aria-label="Home page"
          className="flex items-center gap-2"
        >
          <LogsIcon strokeWidth={3} className="text-primary" size={36} />
          <span className="text-3xl font-semibold ">Notomatic</span>
        </Link>

        <nav className="space-x-4">
          <Button size="lg" variant="ghost" asChild>
            <Link href={signInHref}>Sign In</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={signInHref}>Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center text-center mt-10 max-w-5xl">
        <h1 className="text-5xl font-semibold font-pretty mb-6">
          <span className="text-primary">Notomatic</span> is a revolutionary
          note-taking app
        </h1>
        <p className="text-lg text-gray-950 mb-8">
          Notomatic is designed to help you take notes quickly and efficiently,
          with a focus on simplicity and ease of use. Whether you&apos;re a
          student, professional, or just someone who loves to jot down ideas...
        </p>
        <div className="flex flex-col items-center w-full max-w-md space-y-4">
          <Button size="lg" variant="default" className="max-w-64" asChild>
            <Link href={signInHref}>Sign in with your account</Link>
          </Button>
          <Separator />
          <Button size="lg" variant="outline" asChild>
            <Link href={signUpHref}>Create a new account</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
