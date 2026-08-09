import { ArrowLeftIcon, MailCheckIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/atoms/button";
import { cn } from "@/lib/utils";

export default function ConfirmEmailPage() {
    return (
        <div className="fade-in slide-in-from-bottom-4 flex animate-in flex-col items-center justify-center space-y-6 text-center duration-700">
            {/* Ícono central con brillo bioluminiscente */}
            <div className="group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-cyan-500/20 bg-cyan-950/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <div className="absolute inset-0 bg-cyan-500/10 transition-colors duration-500 group-hover:bg-cyan-500/20" />
                <MailCheckIcon className="relative z-10 h-10 w-10 animate-pulse text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            </div>

            <div className="space-y-3">
                <h1 className="font-heading font-semibold text-2xl text-white tracking-tight">
                    Verifica tu bandeja de entrada
                </h1>
                <p className="px-4 text-muted-foreground text-sm leading-relaxed">
                    Hemos enviado un enlace encriptado para confirmar tu identidad.
                    <br />
                    Haz clic en el enlace para habilitar tu acceso al
                    <span className="mx-1 rounded border border-cyan-400/20 bg-cyan-400/10 px-1.5 py-0.5 font-mono text-cyan-400 text-xs">
                        VAULT
                    </span>
                    .
                </p>
            </div>

            <div className="w-full pt-6">
                <Link
                    href="/login"
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "group w-full border-white/10 bg-black/40 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10 hover:text-white",
                    )}
                >
                    <ArrowLeftIcon className="mr-2 h-4 w-4 text-cyan-400/70 transition-all group-hover:-translate-x-1 group-hover:text-cyan-400" />
                    Regresar a la terminal
                </Link>
            </div>
        </div>
    );
}
