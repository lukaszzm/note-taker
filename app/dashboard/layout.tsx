import { SignOut } from "@/features/auth/components/sign-out";
import { CreateNote } from "@/features/notes/components/create-note";
import { getProxyUrl } from "@/features/shared/lib/proxy";
import { LogsIcon } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const homeHref = getProxyUrl(null);
  const homeDashboardHref = getProxyUrl("/dashboard");
  const notesApiHref = getProxyUrl("/api/notes");

  return (
    <div className="flex flex-col h-screen gap-8 items-center">
      <header className="m-3 p-3 bg-white border border-border rounded-md w-full max-w-lg flex items-center justify-between gap-4">
        <Link
          href={homeDashboardHref}
          aria-label="Back to Home page"
          className="flex items-center gap-2"
        >
          <LogsIcon strokeWidth={3} className="text-primary" size={32} />
          <span className="text-xl font-medium">Notomatic</span>
        </Link>
        <nav className="flex items-center justify-between gap-2">
          <CreateNote notesApiHref={notesApiHref} />
          <SignOut homeHref={homeHref} />
        </nav>
      </header>
      <div className="flex-1 w-full max-w-3xl">{children}</div>
    </div>
  );
}
