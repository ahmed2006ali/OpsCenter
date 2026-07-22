import type { ComponentPropsWithoutRef } from "react";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: "default" | "success" | "warning" | "muted";
};

const badgeStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-slate-800 text-slate-100",
  success: "bg-emerald-500/15 text-emerald-200",
  warning: "bg-amber-500/15 text-amber-200",
  muted: "bg-white/5 text-slate-300",
};

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${badgeStyles[variant]} ${className}`} {...props} />;
}
