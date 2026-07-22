"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { useAuthStore } from "@/store/auth";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { remember: true },
  });

  const onSubmit = async () => {
    login();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input label="Email" type="email" placeholder="admin@opscenter.dev" {...register("email")} error={errors.email?.message} />
      <Input label="Password" type="password" placeholder="Enter your password" {...register("password")} error={errors.password?.message} />
      <div className="flex items-center justify-between gap-4">
        <Checkbox label="Remember me" {...register("remember")} />
        <Link href="#" className="text-sm font-medium text-emerald-300 transition hover:text-emerald-100">
          Forgot password?
        </Link>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Login
      </Button>
      <p className="text-center text-sm text-slate-400">
        New to OpsCenter?{" "}
        <Link href="/register" className="font-medium text-emerald-300 hover:text-emerald-100">
          Create an account
        </Link>
      </p>
    </form>
  );
}
