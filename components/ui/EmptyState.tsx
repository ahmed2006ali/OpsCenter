import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function EmptyState({ title, description, children }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-8 text-center text-slate-200 shadow-lg shadow-black/20">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-slate-100">
        <span className="text-xl font-semibold">•</span>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
