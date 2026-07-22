import type { ComponentPropsWithoutRef, ReactNode } from "react";

type StatCardProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
  trend?: string;
};

export function StatCard({ title, value, description, icon, trend, className = "", ...props }: StatCardProps) {
  return (
    <div className={`grid gap-5 rounded-3xl border border-white/10 bg-slate-950/95 p-6 ${className}`} {...props}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-slate-100 shadow-sm">{icon}</div>
        {trend ? <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">{trend}</span> : null}
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{title}</p>
        <p className="mt-4 text-3xl font-semibold text-slate-100">{value}</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </div>
  );
}
