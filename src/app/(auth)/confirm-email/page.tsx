import { MailCheckIcon, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/atoms/button";
import { cn } from "@/lib/utils";

export default function ConfirmEmailPage() {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Ícono central con brillo bioluminiscente */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-950/30 border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-500" />
                <MailCheckIcon className="h-10 w-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] relative z-10 animate-pulse" />
            </div>

            <div className="space-y-3">
                <h1 className="text-2xl font-semibold tracking-tight text-white font-heading">
                    Verifica tu bandeja de entrada
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">
                    Hemos enviado un enlace encriptado para confirmar tu identidad.
                    <br />
                    Haz clic en el enlace para habilitar tu acceso al
                    <span className="text-cyan-400 font-mono text-xs mx-1 px-1.5 py-0.5 bg-cyan-400/10 rounded border border-cyan-400/20">
                        VAULT
                    </span>.
                </p>
            </div>

            <div className="pt-6 w-full">
                <Link
                    href="/login"
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "w-full bg-black/40 border-white/10 hover:bg-white/10 hover:text-white hover:border-cyan-500/30 transition-all duration-300 group"
                    )}
                >
                    <ArrowLeftIcon className="mr-2 h-4 w-4 text-cyan-400/70 group-hover:text-cyan-400 group-hover:-translate-x-1 transition-all" />
                    Regresar a la terminal
                </Link>
            </div>
        </div>
    );
}
