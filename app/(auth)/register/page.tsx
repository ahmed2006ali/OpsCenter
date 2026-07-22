import { Logo } from "@/components/common/Logo";
import RegisterForm from "@/features/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <Logo />
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Team onboarding</p>
                <h1 className="mt-4 text-4xl font-semibold text-white">Create your OpsCenter account</h1>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-400">
                Get started with the internal operations platform, built for engineers who manage servers, processes, and observability from a single console.
              </p>
              <div className="grid gap-4 rounded-3xl bg-slate-950/80 p-6 text-sm text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Enterprise-ready</span>
                  <span className="text-emerald-300">Trusted</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Secure registration</span>
                  <span className="text-emerald-300">Local</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Designed for Linux teams</span>
                  <span className="text-emerald-300">Ready</span>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Register</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Start your OpsCenter trial</h2>
            </div>
            <RegisterForm />
          </section>
        </div>
      </div>
    </div>
  );
}
