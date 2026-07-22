import type { ReactNode } from "react";

type ErrorStateProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function ErrorState({ title, description, children }: ErrorStateProps) {
  return (
    <div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-8 text-center text-rose-100 shadow-lg shadow-black/10">
      <p className="text-3xl">⚠️</p>
      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-rose-200">{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}
