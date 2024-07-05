import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();


<<<<<<< HEAD
=======
  //return NextResponse.redirect(new URL('/dashboard', request.url))
>>>>>>> f7884781d6d1ca60ae1f9c67f62d9ab10e74f04d

export const config = {
  matcher: [
    "/sign-up",
    "/sign-in",
    "/profile",
    "/dashboard",
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
