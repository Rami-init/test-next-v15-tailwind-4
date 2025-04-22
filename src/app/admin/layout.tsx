import { Badge } from "@/components/ui/badge";
import { UserButton } from "@clerk/nextjs";
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
      <nav className="flex gap-4 mx-auto container font-semibold text-primary">
        <div className="flex items-center gap-x-3 mr-auto">
          <Link href="/" className="text-lg  hover:underline">
            Course Store
          </Link>
          <Badge>Admin</Badge>
        </div>
        <Suspense>
          <Link
            href="/admin/courses"
            className="hover:bg-accent/10 flex items-center px-2"
          >
            Courses
          </Link>
          <Link
            href="/admin/products"
            className="hover:bg-accent/10 flex items-center px-2"
          >
            Products
          </Link>
          <Link
            href="/admin/sales"
            className="hover:bg-accent/10 flex items-center px-2"
          >
            Sales
          </Link>
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
        </Suspense>
      </nav>
    </header>
  );
};
