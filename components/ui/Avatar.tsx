import { User } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";

type AvatarProps = ComponentPropsWithoutRef<"div"> & {
  label?: string;
  subtitle?: string;
};

export function Avatar({ label, subtitle, className = "", ...props }: AvatarProps) {
  return (
    <div className={`flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/90 px-3 py-2 ${className}`} {...props}>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-slate-200 shadow-sm">
        <User className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        {label ? <p className="truncate text-sm font-semibold text-slate-100">{label}</p> : null}
        {subtitle ? <p className="truncate text-xs text-slate-400">{subtitle}</p> : null}
      </div>
    </div>
  );
}
