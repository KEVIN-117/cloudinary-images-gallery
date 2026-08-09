import { ArrowRight, Images, Sparkles, Vault } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const VAULT_FEATURES = [
    {
        icon: Images,
        label: "Private archive",
        description: "Your images are stored securely, accessible only to you.",
    },
    {
        icon: Sparkles,
        label: "Cloudinary-powered",
        description: "Instant delivery via global CDN with automatic optimization.",
    },
    {
        icon: Vault,
        label: "Encrypted at rest",
        description: "End-to-end protection for every asset in your collection.",
    },
];

export function WelcomeCard() {
    return (
        <div className="fade-in slide-in-from-bottom-6 mx-auto flex w-full animate-in flex-col items-center justify-center space-y-8 duration-1000">
            <div className="flex flex-col items-center gap-3">
                <div className="group relative h-20 w-20">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl transition-all duration-700 group-hover:bg-fuchsia-500/20" />
                    <Image
                        src="/icon.svg"
                        alt="CloudGallery"
                        fill
                        className="relative z-10 object-contain drop-shadow-[0_0_14px_rgba(34,211,238,0.6)]"
                    />
                </div>

                {/* Headline */}
                <div className="space-y-1.5 text-center">
                    <div className="mb-2 flex items-center justify-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        <span className="font-mono text-[10px] text-cyan-400/80 uppercase tracking-widest">
                            Identity minted
                        </span>
                    </div>
                    <h1 className="font-bold text-3xl text-white tracking-tight">
                        Vault initialized.
                    </h1>
                    <p className="max-w-xs text-muted-foreground text-sm leading-relaxed">
                        Your secure archive is ready. Start uploading images and building your
                        visual collection.
                    </p>
                </div>
            </div>

            <div className="w-full space-y-2">
                {VAULT_FEATURES.map(({ icon: Icon, label, description }) => (
                    <div
                        key={label}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
                    >
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <div>
                            <p className="font-medium text-sm text-white/90">{label}</p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Link
                href="/dashboard/gallery"
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-fuchsia-500/40 bg-black/20 px-6 py-3 font-semibold text-sm text-white shadow-[0_0_20px_rgba(217,70,239,0.25)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)]"
            >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-violet-500/0 transition-transform duration-1000 group-hover:translate-x-full" />
                <span className="relative z-10 flex items-center gap-2">
                    Open vault
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
            </Link>

            <Link
                href="/login"
                className="text-muted-foreground text-xs transition-colors hover:text-white"
            >
                Sign in with a different account
            </Link>
        </div>
    );
}
