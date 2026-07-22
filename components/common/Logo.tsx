import Link from "next/link";

export function Logo({ compact }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 text-slate-100 transition-colors hover:text-white">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-sm font-semibold text-white shadow-sm">
        OC
      </div>
      {!compact ? (
        <div className="flex flex-col leading-none">
          <span className="text-sm font-semibold text-white">OpsCenter</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Linux Operations</span>
        </div>
      ) : null}
    </Link>
  );
}
