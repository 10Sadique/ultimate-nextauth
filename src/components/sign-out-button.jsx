"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  return (
    <div>
      <Button variant={"outline"} onClick={() => signOut()}>
        Sign Out
      </Button>
    </div>
  );
};
