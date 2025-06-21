import { getProxyUrl } from "@/features/shared/lib/proxy";
import { LogsIcon } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const homeHref = getProxyUrl(null);

  return (
    <div className="grid place-content-center min-h-screen bg-gray-100">
      <Link
        href={homeHref}
        aria-label="Back to Home page"
        className="flex items-center gap-2 top-0 left-1/2 transform -translate-x-1/2 absolute py-3"
      >
        <LogsIcon strokeWidth={3} className="text-primary" size={36} />
        <span className="text-3xl font-semibold">Notomatic</span>
      </Link>
      <main className="space-y-6 bg-white border border-border p-6 rounded-md w-full max-w-md">
        {children}
      </main>
    </div>
  );
}
