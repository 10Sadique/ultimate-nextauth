import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

import db from "@/lib/prismadb";

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter email and password");
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("No user found.");
        }

        const passwordMathced = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!passwordMathced) {
          throw new Error("Wrong password.");
        }

        return user;
      },
    }),
  ],

  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
