import { getServerSession } from "next-auth";

import { User } from "@/components/user";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SignOutButton } from "@/components/sign-out-button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <section className="container p-4">
      <h1>Home</h1>
      <h1>Server Side Rendered</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <User />

      <div className="flex items-center pt-4 space-x-4">
        <SignOutButton />

        <Link href={"/login"} className={buttonVariants()}>
          Login
        </Link>
      </div>
    </section>
  );
}
