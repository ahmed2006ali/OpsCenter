import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold">404</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
          The route you tried to open does not exist yet. Return to the OpsCenter dashboard to continue.
        </p>
        <Link href="/dashboard" className="mt-8 inline-flex rounded-3xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          Go back to dashboard
        </Link>
      </div>
    </div>
  );
}
