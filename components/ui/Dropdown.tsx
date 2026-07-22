"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";

type DropdownItem = {
  label: string;
  onClick: () => void;
  href?: string;
};

type DropdownProps = {
  trigger: ReactNode;
  items: DropdownItem[];
  label?: string;
};

export function Dropdown({ trigger, items, label }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-flex text-left">
      <button type="button" onClick={() => setOpen((current) => !current)} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/40">
        {trigger}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 py-2 shadow-xl shadow-black/30"
          >
            {label ? <div className="px-4 pb-2 pt-3 text-xs uppercase tracking-[0.24em] text-slate-500">{label}</div> : null}
            {items.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setOpen(false);
                  item.onClick();
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
