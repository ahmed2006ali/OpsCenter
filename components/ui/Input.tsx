"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <label className="flex w-full flex-col gap-2 text-sm text-slate-200">
        {label ? <span className="font-medium text-slate-100">{label}</span> : null}
        <input
          ref={ref}
          className={`rounded-2xl border border-slate-700/70 bg-slate-950 px-4 py-3 text-sm text-slate-100 shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-500/40 ${className}`}
          {...props}
        />
        {error ? <span className="text-xs text-rose-300">{error}</span> : null}
      </label>
    );
  }
);

Input.displayName = "Input";
