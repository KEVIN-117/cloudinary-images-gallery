import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Vault, Images, Sparkles } from "lucide-react";

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
    <div className="mx-auto flex flex-col items-center justify-center space-y-8 w-full animate-in fade-in slide-in-from-bottom-6 duration-1000">

      <div className="flex flex-col items-center gap-3">
        <div className="relative w-20 h-20 group">
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-fuchsia-500/20 transition-all duration-700" />
          <Image
            src="/icon.svg"
            alt="CloudGallery"
            fill
            className="object-contain drop-shadow-[0_0_14px_rgba(34,211,238,0.6)] relative z-10"
          />
        </div>

        {/* Headline */}
        <div className="text-center space-y-1.5">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest">
              Identity minted
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Vault initialized.
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Your secure archive is ready. Start uploading images and building
            your visual collection.
          </p>
        </div>
      </div>

      <div className="w-full space-y-2">
        {VAULT_FEATURES.map(({ icon: Icon, label, description }) => (
          <div
            key={label}
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
          >
            <Icon className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white/90">{label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/dashboard/gallery"
        className="relative w-full overflow-hidden group flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(217,70,239,0.25)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all duration-500 border border-fuchsia-500/40 bg-black/20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/20 to-violet-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <span className="relative z-10 flex items-center gap-2">
          Open vault
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>

      <Link
        href="/login"
        className="text-xs text-muted-foreground hover:text-white transition-colors"
      >
        Sign in with a different account
      </Link>
    </div>
  );
}
