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
import { buttonVariants } from "@/components/ui/button";
import { RegisterForm } from "@/components/register-form";

export default function RegisterPage() {
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
            <CardTitle>Register</CardTitle>
            <CardDescription>Create a new account.</CardDescription>
          </CardHeader>

          <CardContent>
            <RegisterForm />
          </CardContent>

          <CardFooter>
            <p>
              Already have an account?{" "}
              <Link className="underline" href={"/login"}>
                Login
              </Link>
              .
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
