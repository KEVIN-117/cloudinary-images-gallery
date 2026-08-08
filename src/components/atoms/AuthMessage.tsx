"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, Info } from "lucide-react";

type AuthMessageVariant = "error" | "info";

interface AuthMessageProps {
  message: string;
  variant?: AuthMessageVariant;
  className?: string;
}

/**
 * AuthMessage — Atom
 * Renders an inline contextual banner for auth-related system messages.
 * Used to surface callback errors (e.g. expired tokens) without breaking the page layout.
 */
export function AuthMessage({ message, variant = "error", className }: AuthMessageProps) {
  const isError = variant === "error";

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-500",
        isError
          ? "bg-rose-950/50 border-rose-500/30 text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.1)]"
          : "bg-violet-950/50 border-violet-500/30 text-violet-200 shadow-[0_0_12px_rgba(139,92,246,0.1)]",
        className
      )}
    >
      {isError ? (
        <AlertTriangle className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />
      ) : (
        <Info className="h-4 w-4 shrink-0 text-violet-400 mt-0.5" />
      )}
      <p className="leading-relaxed">{message}</p>
    </div>
  );
}
