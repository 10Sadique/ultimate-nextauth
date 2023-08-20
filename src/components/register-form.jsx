"use client";

import * as z from "zod";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().min(5, { message: "Email must be at least 5 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/register", values);

      toast.success("Account created.");
      router.push("/login");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} type="submit" className="w-full">
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Register
          </Button>
        </form>
      </Form>
      <Separator className="my-4" />
      <div className="flex items-center space-x-4">
        <Button
          onClick={() => signIn("google")}
          className="w-full font-bold"
          variant="secondary"
        >
          Google
        </Button>
        <Button
          onClick={() => signIn("github")}
          className="w-full font-bold"
          variant="secondary"
        >
          GitHub
        </Button>
      </div>
    </>
  );
};
