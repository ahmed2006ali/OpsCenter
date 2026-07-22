import type { HTMLAttributes } from "react";

type LoadingProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export function Loading({ label = "Loading…", className = "", ...props }: LoadingProps) {
  return (
    <div className={`flex flex-col items-center gap-3 text-slate-200 ${className}`} {...props}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700/80">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-100 border-t-transparent" />
      </div>
      <span className="text-sm text-slate-300">{label}</span>
    </div>
  );
}
