import Image from "next/image";
import { Button } from "@/components/atoms/button";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
            {/* Glow Behind the Icon */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

            {/* Hero Content */}
            <div className="z-10 flex animate-fade-up flex-col items-center gap-6">
                <div className="relative h-32 w-32 animate-loader-icon-float md:h-40 md:w-40">
                    <Image
                        src="/icon.svg"
                        alt="Cloudinary Image Gallery Logo"
                        fill
                        unoptimized
                        className="object-contain drop-shadow-[0_0_20px_var(--color-primary)]"
                    />
                </div>

                <h1 className="max-w-3xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 bg-clip-text font-extrabold text-5xl text-transparent tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] md:text-7xl">
                    Mint Your Visual <br />{" "}
                    <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">
                        Legacy
                    </span>
                </h1>

                <p className="max-w-xl font-light text-lg text-muted-foreground md:text-xl">
                    A decentralized-style vault for your digital assets. Powered by Cloudinary
                    edge-caching and the Bioluminescent aesthetic.
                </p>

                <div className="mt-4 flex items-center gap-4">
                    <Button size="lg" className="rounded-xl px-8 font-semibold text-md">
                        Upload Asset
                    </Button>
                    <Button
                        size="lg"
                        variant="ghost"
                        className="glass-card rounded-xl border border-white/10 px-8 font-semibold text-md"
                    >
                        Explore Vault
                    </Button>
                </div>
            </div>
        </section>
    );
}
