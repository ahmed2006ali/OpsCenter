import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Overview</p>
        <h1 className="text-3xl font-semibold text-slate-100">{title}</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
