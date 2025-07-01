import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/features/auth/lib/auth";
import { getProxyUrl } from "@/features/shared/lib/proxy";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isPublicRoute =
    request.nextUrl.pathname.includes("sign-in") ||
    request.nextUrl.pathname.includes("sign-up") ||
    request.nextUrl.pathname.endsWith(process.env.PORT as string) ||
    request.nextUrl.pathname.endsWith(process.env.LOGIN as string) ||
    request.nextUrl.pathname === "/";

  const isPrivateRoute = request.nextUrl.pathname.includes("/dashboard");

  if (session) {
    if (isPublicRoute) {
      return NextResponse.redirect(
        new URL(getProxyUrl("/dashboard"), request.url)
      );
    }

    return NextResponse.next();
  }

  if (isPrivateRoute) {
    return NextResponse.redirect(new URL(getProxyUrl("/sign-in"), request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: `/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)`,
};
