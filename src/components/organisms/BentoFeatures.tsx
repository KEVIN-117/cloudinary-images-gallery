import { Button } from "@/components/atoms/button";

export default function BentoFeatures() {
    return (
        <section id="features" className="mx-auto w-full max-w-7xl px-4 py-24">
            <div className="mb-16 flex flex-col items-center text-center">
                <h2 className="mb-4 font-bold font-heading text-3xl md:text-5xl">
                    Architected for <span className="text-gradient">Eternity</span>
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                    We don't just store pixels. We encode visual history using edge-optimized
                    networks and uncompromising security.
                </p>
            </div>

            <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-3">
                {/* Large Feature */}
                <div className="glass-card group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-white/5 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-3xl md:col-span-2">
                    <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-[80px] transition-all duration-700 group-hover:scale-110 group-hover:bg-fuchsia-500/30" />
                    <div className="z-10">
                        <p className="mb-2 font-mono text-primary text-xs uppercase tracking-wider">
                            01 / Storage Layer
                        </p>
                        <h3 className="mb-2 font-semibold text-2xl">Cloudinary Edge CDN</h3>
                        <p className="max-w-md text-muted-foreground">
                            Instantaneous delivery of digital assets globally. Lossless compression,
                            on-the-fly transformations, and unmetered visual fidelity.
                        </p>
                    </div>
                    <div className="z-10">
                        <Button
                            variant="outline"
                            className="glass rounded-full px-6 text-xs tracking-wider"
                        >
                            Read Specs
                        </Button>
                    </div>
                </div>

                {/* Medium Feature */}
                <div className="glass-card group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-white/5 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
                    <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-[50px] transition-all duration-700 group-hover:scale-125 group-hover:bg-cyan-500/40" />
                    <div className="z-10">
                        <p className="mb-2 font-mono text-cyan-400 text-xs uppercase tracking-wider">
                            02 / Auth
                        </p>
                        <h3 className="mb-2 font-semibold text-xl">Supabase SSR</h3>
                        <p className="text-muted-foreground text-sm">
                            Cryptographically secure, zero-trust authentication via cookies.
                        </p>
                    </div>
                </div>

                {/* Medium Feature */}
                <div className="glass-card group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-white/5 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
                    <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-violet-500/20 blur-[50px] transition-all duration-700 group-hover:scale-125 group-hover:bg-violet-500/40" />
                    <div className="z-10">
                        <p className="mb-2 font-mono text-violet-400 text-xs uppercase tracking-wider">
                            03 / State
                        </p>
                        <h3 className="mb-2 font-semibold text-xl">App Router</h3>
                        <p className="text-muted-foreground text-sm">
                            Server-first rendering for absolute performance metrics.
                        </p>
                    </div>
                </div>

                {/* Large Feature */}
                <div className="glass-card relative flex flex-col items-center justify-center overflow-hidden p-8 text-center md:col-span-2">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
                    <div className="z-10">
                        <h3 className="mb-4 font-bold font-heading text-3xl">Ready to Mint?</h3>
                        <Button
                            size="lg"
                            className="rounded-xl px-12 shadow-[0_0_20px_var(--color-primary)] hover:shadow-[0_0_30px_var(--color-primary)]"
                        >
                            Initialize Vault
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
