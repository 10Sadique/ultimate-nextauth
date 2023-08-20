"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { buttonVariants } from "./ui/button";
import { SignOutButton } from "./sign-out-button";

export const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") return null;

  return (
    <div className="py-2 border-b">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="text-xl font-bold">
          NextAuth Starter
        </Link>
        {session && <SignOutButton />}
        {!session && (
          <Link
            href={"/login"}
            className={buttonVariants({
              className: "font-semibold",
              variant: "secondary",
            })}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
