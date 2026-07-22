"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ open, title, children, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-2xl shadow-black/40"
            initial={{ y: 24, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 24, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
              >
                Close
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
