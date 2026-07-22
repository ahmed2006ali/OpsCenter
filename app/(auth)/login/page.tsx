import { Logo } from "@/components/common/Logo";
import LoginForm from "@/features/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <Logo />
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Secure access</p>
                <h1 className="mt-4 text-4xl font-semibold text-white">Welcome back to OpsCenter</h1>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-400">
                Modern, minimal admin tools for Linux and Ubuntu teams. Sign in to access the centralized operations console and manage your fleet with confidence.
              </p>
              <div className="grid gap-4 rounded-3xl bg-slate-950/80 p-6 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Professional console</span>
                  <span className="text-emerald-300">Ready</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Secure session state</span>
                  <span className="text-emerald-300">Local only</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Engineered for DevOps</span>
                  <span className="text-emerald-300">Built-in</span>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Sign in</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Log in to your account</h2>
            </div>
            <LoginForm />
          </section>
        </div>
      </div>
    </div>
  );
}
