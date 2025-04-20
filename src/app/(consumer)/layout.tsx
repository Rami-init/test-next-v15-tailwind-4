import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { Suspense } from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
export const NavBar = () => {
  return (
    <header className="flex h-12 shadow bg-secondary-foreground z-10 max-w-screen">
      <nav className="flex gap-4 mx-auto container font-semibold text-gray-700">
        <Link
          href="/"
          className="mr-auto text-lg  hover:underline px-2 flex items-center text-secondary"
        >
          Course Store
        </Link>
        <Suspense>
          <Link
            href="/admin"
            className="hover:bg-accent/10 flex items-center px-2"
          >
            Admin
          </Link>
          <Link
            href="/courses"
            className="hover:bg-accent/10 flex items-center px-2"
          >
            My Courses
          </Link>
          <Link
            href="/purchases"
            className="hover:bg-accent/10 flex items-center px-2"
          >
            Purchase History
          </Link>
          <SignedIn>
            <div className="size-8 self-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-full h-full",
                    userButtonAvatar: "w-full h-full",
                    userButtonAvatarImage: "w-full h-full",
                  },
                }}
              />
            </div>
          </SignedIn>
        </Suspense>

        <Suspense>
          <SignedOut>
            <Button className="size-8 self-center" asChild>
              <SignInButton />
            </Button>
          </SignedOut>
        </Suspense>
      </nav>
    </header>
  );
};
