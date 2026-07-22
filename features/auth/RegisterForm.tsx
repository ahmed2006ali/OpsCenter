"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuthStore } from "@/store/auth";

const registerSchema = z
  .object({
    name: z.string().min(2, "Full name is required"),
    email: z.string().min(1, "Email is required").email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async () => {
    login();
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input label="Full Name" type="text" placeholder="Ahmed Ali" {...register("name")} error={errors.name?.message} />
      <Input label="Email" type="email" placeholder="admin@opscenter.dev" {...register("email")} error={errors.email?.message} />
      <Input label="Password" type="password" placeholder="Create a password" {...register("password")} error={errors.password?.message} />
      <Input label="Confirm Password" type="password" placeholder="Confirm password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Register
      </Button>
      <p className="text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-emerald-300 hover:text-emerald-100">
          Sign in
        </Link>
      </p>
    </form>
  );
}
