import { getServerSession } from "next-auth";

import { User } from "@/components/user";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <section className="container p-4">
      <div className="grid grid-cols-2 gap-8 mt-4">
        <div className="p-4 border rounded-md bg-zinc-800">
          <h1>Server Side Rendered</h1>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>

        <User />
      </div>
    </section>
  );
}
