import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/login-form";
import { buttonVariants } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="relative grid h-screen grid-cols-1 lg:grid-cols-2">
      <Link
        className={buttonVariants({
          className: "absolute top-4 left-4",
          variant: "secondary",
        })}
        href={"/"}
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back
      </Link>
      <div className="hidden w-full h-full lg:block bg-zinc-600"></div>
      <div className="flex items-center justify-center h-full">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login to your account.</CardDescription>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>

          <CardFooter>
            <p>
              Don&apos;t have an account?{" "}
              <Link className="underline" href={"/register"}>
                Register
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
