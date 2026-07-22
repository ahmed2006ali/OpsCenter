"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = "", ...props }, ref) => (
    <label className={`inline-flex cursor-pointer items-center gap-2 text-sm text-slate-200 ${className}`}>
      <input
        ref={ref}
        type="checkbox"
        className="h-4 w-4 rounded border-slate-600 bg-slate-950 text-slate-100 focus:ring-slate-500"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
);

Checkbox.displayName = "Checkbox";
