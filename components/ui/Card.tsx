import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 shadow-lg shadow-black/20 ${className}`} {...props} />
  );
}
