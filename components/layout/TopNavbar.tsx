"use client";

import { Bell, ChevronDown, LayoutDashboard, Moon, Search, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dropdown } from "@/components/ui/Dropdown";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/store/auth";
import { useTheme } from "@/components/common/ThemeProvider";
import { Logo } from "@/components/common/Logo";

type TopNavbarProps = {
  onOpenMobileMenu: () => void;
};

export function TopNavbar({ onOpenMobileMenu }: TopNavbarProps) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1520px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:hidden">
          <Button variant="ghost" size="sm" onClick={onOpenMobileMenu}>
            <LayoutDashboard className="h-4 w-4" />
          </Button>
          <Logo compact />
        </div>

        <div className="flex flex-1 items-center gap-4">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="search"
              placeholder="Search servers, processes, logs..."
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-12 py-3 text-sm text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/10"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => {}}>
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Dropdown
            trigger={
              <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-800">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-200">{user?.name.charAt(0) ?? "A"}</span>
                <span className="hidden min-w-[120px] flex-col text-left sm:flex">
                  <span className="text-sm font-semibold text-slate-100">{user?.name ?? "Admin"}</span>
                  <span className="text-xs text-slate-400">{user?.role ?? "Admin"}</span>
                </span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            }
            items={[
              { label: "Profile", onClick: () => router.push("/dashboard") },
              { label: "Settings", onClick: () => router.push("/dashboard/settings") },
              {
                label: "Logout",
                onClick: () => {
                  logout();
                  router.replace("/login");
                },
              },
            ]}
          />
        </div>
      </div>
    </header>
  );
}
