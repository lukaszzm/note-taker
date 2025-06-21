import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogsIcon } from "lucide-react";

export const metadata = {
  title: "Notomatic",
  description: "A revolutionary note-taking app for everyone",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <header className="flex items-center justify-between w-full px-6 py-4">
        <Link
          href="/"
          aria-label="Home page"
          className="flex items-center gap-2"
        >
          <LogsIcon strokeWidth={3} className="text-primary" size={36} />
          <span className="text-3xl font-semibold ">Notomatic</span>
        </Link>

        <nav>
          <Button size="lg" variant="outline" asChild>
            <Link href="/sign-in">Sign In</Link>
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
        <Button size="lg" className="max-w-sm mx-auto" asChild>
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </main>
    </div>
  );
}
