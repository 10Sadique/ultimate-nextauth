"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Client Side Rendered</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
