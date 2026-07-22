"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronLeft } from "lucide-react";
import { navigationItems } from "@/constants/navigation";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  onToggleCollapsed: () => void;
};

export function Sidebar({ collapsed, mobileOpen, onCloseMobile, onToggleCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onCloseMobile}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-white/10 bg-slate-950/95 pb-5 shadow-xl shadow-black/30 transition-transform duration-300 md:static md:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} ${collapsed ? "md:w-20" : "md:w-72"}`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
          <Logo compact={collapsed} />
          <button
            type="button"
            onClick={onCloseMobile}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/90 text-slate-200 transition hover:bg-slate-800 md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex min-h-0 flex-1 flex-col px-3">
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${active ? "bg-emerald-500/10 text-emerald-200" : "text-slate-300 hover:bg-white/5 hover:text-slate-100"}`}
                  onClick={onCloseMobile}
                >
                  <item.icon className="h-5 w-5" />
                  <span className={`${collapsed ? "hidden" : "block"}`}>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto px-5">
          <Button
            variant="secondary"
            size="sm"
            onClick={onToggleCollapsed}
            className="w-full gap-2"
          >
            <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : "rotate-0"}`} />
            <span className={`${collapsed ? "hidden" : "block"}`}>Collapse</span>
          </Button>
        </div>
      </aside>
    </>
  );
}
