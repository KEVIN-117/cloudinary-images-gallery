"use client";

import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

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
                "fade-in slide-in-from-top-2 flex animate-in items-start gap-2.5 rounded-xl border px-4 py-3 text-sm backdrop-blur-md duration-500",
                isError
                    ? "border-rose-500/30 bg-rose-950/50 text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.1)]"
                    : "border-violet-500/30 bg-violet-950/50 text-violet-200 shadow-[0_0_12px_rgba(139,92,246,0.1)]",
                className,
            )}
        >
            {isError ? (
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
            ) : (
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
            )}
            <p className="leading-relaxed">{message}</p>
        </div>
    );
}
