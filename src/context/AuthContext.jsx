"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export const Provider = ({ children }) => {
  return (
    <SessionProvider>
      <Toaster position="bottom-right" />
      {children}
    </SessionProvider>
  );
};
