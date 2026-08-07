import Image from "next/image";
import { Button } from "@/components/atoms/button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 overflow-hidden">
      {/* Glow Behind the Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="z-10 flex flex-col items-center gap-6 animate-fade-up">
        <div className="relative w-32 h-32 md:w-40 md:h-40 animate-loader-icon-float">
          <Image
            src="/icon.svg"
            alt="Cloudinary Image Gallery Logo"
            fill
            unoptimized
            className="object-contain drop-shadow-[0_0_20px_var(--color-primary)]"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] max-w-3xl">
          Mint Your Visual <br /> <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">Legacy</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-light">
          A decentralized-style vault for your digital assets. Powered by Cloudinary edge-caching and the Bioluminescent aesthetic.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Button size="lg" className="px-8 font-semibold text-md rounded-xl">
            Upload Asset
          </Button>
          <Button size="lg" variant="ghost" className="px-8 font-semibold text-md rounded-xl border border-white/10 glass-card">
            Explore Vault
          </Button>
        </div>
      </div>
    </section>
  );
}
